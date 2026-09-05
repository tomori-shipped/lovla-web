import { spawn } from "node:child_process";
import { once } from "node:events";

// Build first, then run: node scripts/check-release.mjs
// Keep the server and checks in the same process environment; no deployment.
const server = spawn(process.execPath, [
  "node_modules/next/dist/bin/next", "start", "--hostname", "127.0.0.1", "--port", "3100",
], { stdio: ["ignore", "pipe", "inherit"] });

try {
  await new Promise((resolve, reject) => {
    const timeout = setTimeout(() => reject(new Error("Local server did not start within 30 seconds")), 30_000);
    server.once("error", (error) => { clearTimeout(timeout); reject(error); });
    server.once("exit", (code) => { clearTimeout(timeout); reject(new Error(`Local server exited: ${code}`)); });
    server.stdout.on("data", (data) => {
      if (String(data).includes("Ready")) { clearTimeout(timeout); resolve(); }
    });
  });
  const checks = spawn(process.execPath, ["scripts/check-content.mjs", "http://127.0.0.1:3100"], { stdio: "inherit" });
  const [code] = await once(checks, "exit");
  process.exitCode = code ?? 1;
} finally {
  server.kill("SIGTERM");
}
