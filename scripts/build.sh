#!/usr/bin/env bash
set -euo pipefail

ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"

rm -rf "$ROOT/dist"
mkdir -p "$ROOT/dist/ira"

cp -R "$ROOT/src/." "$ROOT/dist/ira/"
cp "$ROOT/_headers" "$ROOT/dist/_headers"

echo "Build complete:"
find "$ROOT/dist" -maxdepth 3 -type f -print
