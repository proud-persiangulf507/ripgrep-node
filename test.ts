import { ripgrep } from "./lib/index.mjs";

// Search for "ripgrep" in the README
const { code } = await ripgrep(["--color=never", "ripgrep", "README.md"], {
  preopens: { ".": import.meta.dirname },
});

if (code !== 0) {
  console.error(`rg exited with code ${code}`);
  process.exit(1);
}
