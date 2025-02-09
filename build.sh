#!/usr/bin/env bash
cd "$(dirname "$0")" || exit 1

pnpm install
pnpm build
cat src/user.js.txt > dist/main.user.js
cat dist/main.js >> dist/main.user.js
