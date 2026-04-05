#!/usr/bin/env node

import module from "node:module";
module.enableCompileCache?.();

const { ripgrep } = await import("./index.mjs");
let argv = process.argv.slice(2);
const { code } = await ripgrep(argv);
process.exit(code ?? 0);
