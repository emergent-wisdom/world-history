#!/usr/bin/env bash
# Installs the toolchain tool.json pins into .tools/ and creates the project's Sema vocabulary in store/sema/.
# Everything lands inside this repository, in ignored directories; nothing is installed globally, and no other
# Sema configuration or vocabulary is read or changed.
#
#   scripts/setup.sh            (PYTHON=python3.12 scripts/setup.sh to choose the interpreter for Sema)
set -euo pipefail
repo="$(cd "$(dirname "$0")/.." && pwd)"
tools="$repo/.tools"
downloads="$tools/downloads"
mkdir -p "$downloads"

pin() {
  node -e 'const t = require(process.argv[1]); const v = process.argv[2].split(".").reduce((o, k) => o?.[k], t);
    if (v === undefined) process.exit(1); process.stdout.write(String(v));' "$repo/tool.json" "$1"
}
check() {
  local got
  got="$(shasum -a 256 "$1" | cut -d' ' -f1)"
  [ "$got" = "$2" ] || { echo "SHA-256 of $1 is $got, not the pinned $2." >&2; exit 1; }
}

# The repository's own dependencies, which the bridge imports (the MCP client), exactly as package-lock.json pins them.
(cd "$repo" && npm ci --no-audit --no-fund)

# Meaning Model: the package as published on npm, then the engine from the GitHub release of the same version.
tgz="$downloads/$(pin meaningModel.package.tarball)"
[ -f "$tgz" ] || (cd "$downloads" && npm pack --silent "$(pin meaningModel.package.name)@$(pin meaningModel.release)" >/dev/null)
check "$tgz" "$(pin meaningModel.package.sha256)"
mkdir -p "$tools/meaning-model"
npm install --prefix "$tools/meaning-model" --no-audit --no-fund --no-save "$tgz"
pkg="$tools/meaning-model/node_modules/$(pin meaningModel.package.name)"
case "$(uname -sm)" in
  "Darwin arm64") target=aarch64-apple-darwin ;;
  "Darwin x86_64") target=x86_64-apple-darwin ;;
  "Linux x86_64") target=x86_64-unknown-linux-gnu ;;
  *) echo "tool.json pins no engine for $(uname -sm)." >&2; exit 1 ;;
esac
engine="$pkg/rust-engine/target/release/life-sim-engine"
want="$(pin "meaningModel.engine.$target.sha256")"
if [ ! -f "$engine" ] || [ "$(shasum -a 256 "$engine" | cut -d' ' -f1)" != "$want" ]; then
  node "$pkg/mcp-server/bin/meaning-model-mcp.mjs" --install-engine
fi
check "$engine" "$want"

# Sema: the pinned wheel in a project virtual environment.
[ -x "$tools/sema/bin/python" ] || "${PYTHON:-python3}" -m venv "$tools/sema"
wheel="$downloads/$(pin sema.package.wheel)"
[ -f "$wheel" ] || "$tools/sema/bin/pip" download --quiet --no-deps --only-binary=:all: -d "$downloads" "$(pin sema.package.name)==$(pin sema.release)"
check "$wheel" "$(pin sema.package.sha256)"
"$tools/sema/bin/pip" install --quiet "$wheel[$(pin sema.package.extras.0)]"

# The project vocabulary: the pinned preset, checked against its roots, then this project's cards, checked against
# the project roots. An existing vocabulary is kept and only compared, since it may hold work not yet committed.
export XDG_CONFIG_HOME="$tools/sema-home/config" SEMA_LIBRARY_DIR="$tools/sema-home/libraries" SEMA_CACHE_DIR="$tools/sema-home/cache"
export FASTEMBED_CACHE_PATH="$tools/sema-home/fastembed" SEMA_DISABLE_PULL=true
export SEMA_DB_PATH="$repo/store/sema/world-history.db"
has_roots() {
  local roots
  roots="$("$tools/sema/bin/sema" root)"
  grep -q "$1" <<<"$roots" && grep -q "$2" <<<"$roots"
}
if [ ! -f "$SEMA_DB_PATH" ]; then
  mkdir -p "$(dirname "$SEMA_DB_PATH")"
  "$tools/sema/bin/sema" build --preset "$(pin sema.vocabulary.preset)" "$SEMA_DB_PATH"
  has_roots "$(pin sema.vocabulary.semanticRoot)" "$(pin sema.vocabulary.catalogRoot)" \
    || { echo "The new vocabulary does not have the pinned preset roots." >&2; "$tools/sema/bin/sema" root >&2; exit 1; }
  "$tools/sema/bin/sema" apply --add "$repo/$(pin sema.projectVocabulary.cards)"
  has_roots "$(pin sema.projectVocabulary.semanticRoot)" "$(pin sema.projectVocabulary.catalogRoot)" \
    || { echo "The project cards did not rebuild the pinned project vocabulary." >&2; "$tools/sema/bin/sema" root >&2; exit 1; }
elif ! has_roots "$(pin sema.projectVocabulary.semanticRoot)" "$(pin sema.projectVocabulary.catalogRoot)"; then
  echo "warning: $SEMA_DB_PATH differs from the pinned project vocabulary; commit its cards and roots, or rebuild it." >&2
fi
"$tools/sema/bin/sema" root

echo "Meaning Model $(pin meaningModel.release): $pkg (engine $target, verified)"
echo "Sema $(pin sema.release): $tools/sema/bin/sema, vocabulary $SEMA_DB_PATH"
