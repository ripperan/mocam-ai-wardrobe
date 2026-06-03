import { createServer } from "node:http";
import { readFile } from "node:fs/promises";
import { existsSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { createRequire } from "node:module";

const require = createRequire(import.meta.url);
const { handler } = require("../netlify/functions/miromind-chat.js");

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const publicDir = path.join(root, "outputs");
const port = Number(process.env.PORT || 4174);

await loadEnv(path.join(root, ".env"));

createServer(async (request, response) => {
  try {
    const url = new URL(request.url || "/", `http://${request.headers.host}`);
    if (url.pathname === "/.netlify/functions/miromind-chat") {
      await handleFunction(request, response);
      return;
    }

    const filePath = resolvePublicFile(url.pathname);
    if (!filePath) {
      send(response, 404, "Not found", "text/plain");
      return;
    }

    const body = await readFile(filePath);
    send(response, 200, body, contentType(filePath));
  } catch (error) {
    send(response, 500, error.message || "Server error", "text/plain");
  }
}).listen(port, () => {
  console.log(`MoCam local API demo: http://localhost:${port}/index.html`);
});

async function handleFunction(request, response) {
  const body = await readRequestBody(request);
  const result = await handler({
    httpMethod: request.method,
    headers: request.headers,
    body
  });

  response.writeHead(result.statusCode || 200, result.headers || {});
  response.end(result.body || "");
}

function resolvePublicFile(pathname) {
  const cleaned = decodeURIComponent(pathname === "/" ? "/index.html" : pathname);
  const normalized = path.normalize(cleaned).replace(/^(\.\.[/\\])+/, "");
  const filePath = path.join(publicDir, normalized);
  if (!filePath.startsWith(publicDir) || !existsSync(filePath)) return "";
  return filePath;
}

function readRequestBody(request) {
  return new Promise((resolve, reject) => {
    let body = "";
    request.setEncoding("utf8");
    request.on("data", (chunk) => {
      body += chunk;
      if (body.length > 1_000_000) {
        reject(new Error("Request body too large."));
        request.destroy();
      }
    });
    request.on("end", () => resolve(body));
    request.on("error", reject);
  });
}

async function loadEnv(envPath) {
  if (!existsSync(envPath)) return;
  const content = await readFile(envPath, "utf8");
  for (const line of content.split(/\r?\n/)) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith("#")) continue;
    const match = trimmed.match(/^([A-Za-z_][A-Za-z0-9_]*)=(.*)$/);
    if (!match) continue;
    const [, key, value] = match;
    if (!process.env[key]) process.env[key] = value.replace(/^["']|["']$/g, "");
  }
}

function send(response, status, body, type) {
  response.writeHead(status, { "Content-Type": type });
  response.end(body);
}

function contentType(filePath) {
  const ext = path.extname(filePath).toLowerCase();
  return {
    ".html": "text/html; charset=utf-8",
    ".css": "text/css; charset=utf-8",
    ".js": "text/javascript; charset=utf-8",
    ".png": "image/png",
    ".jpg": "image/jpeg",
    ".jpeg": "image/jpeg",
    ".webp": "image/webp",
    ".svg": "image/svg+xml"
  }[ext] || "application/octet-stream";
}
