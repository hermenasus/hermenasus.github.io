import { createServer } from "node:http";
import { readFile } from "node:fs/promises";
import { extname, join, normalize } from "node:path";

const root = import.meta.dirname;
const types = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".png": "image/png",
  ".webp": "image/webp",
  ".json": "application/json; charset=utf-8"
};

const server = createServer(async (request, response) => {
  const url = new URL(request.url ?? "/", "http://localhost");

  if (url.pathname === "/api/comments") {
    try {
      const apiUrl = new URL(
        "https://www.zaih.com/falcon/meet_api/v1/mentors/2bllbjjbq3k/comments"
      );
      apiUrl.search = url.search;
      const apiResponse = await fetch(apiUrl, { headers: { accept: "application/json" } });
      const body = await apiResponse.text();
      response.writeHead(apiResponse.ok ? 200 : apiResponse.status, {
        "Cache-Control": "no-store",
        "Content-Type": apiResponse.headers.get("content-type") ?? types[".json"]
      });
      response.end(body);
    } catch {
      response.writeHead(502, {
        "Cache-Control": "no-store",
        "Content-Type": types[".json"]
      });
      response.end(JSON.stringify({ error: "Unable to fetch comments" }));
    }
    return;
  }

  const pathname = url.pathname === "/" ? "/index.html" : url.pathname;
  const safePath = normalize(pathname).replace(/^(\.\.[/\\])+/, "");
  const filePath = join(root, safePath);

  try {
    const body = await readFile(filePath);
    response.writeHead(200, {
      "Content-Type": types[extname(filePath)] ?? "application/octet-stream"
    });
    response.end(body);
  } catch {
    response.writeHead(404, { "Content-Type": "text/plain; charset=utf-8" });
    response.end("Not found");
  }
});

const port = Number(process.env.PORT || 4173);
const host = process.env.HOST || "0.0.0.0";

server.listen(port, host, () => {
  const visibleHost = host === "0.0.0.0" ? "127.0.0.1" : host;
  console.log(`Preview running at http://${visibleHost}:${port}`);
});
