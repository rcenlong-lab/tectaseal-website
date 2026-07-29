import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";
import test from "node:test";

async function render() {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request("http://localhost/", {
      headers: { accept: "text/html" },
    }),
    {
      ASSETS: {
        fetch: async () => new Response("Not found", { status: 404 }),
      },
    },
    {
      waitUntil() {},
      passThroughOnException() {},
    },
  );
}

test("server-renders the TECTASEAL commercial site", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(html, /TECTASEAL \| PVC &amp; TPO Roofing Systems/i);
  assert.match(html, /PVC &amp; TPO SINGLE-PLY ROOFING SYSTEMS/i);
  assert.match(html, /MANUFACTURING &amp; COMPLIANCE DOCUMENTATION/i);
  assert.match(html, /FIELD INSTALLATIONS/i);
  assert.match(html, /PRODUCTION TO DISPATCH/i);
  assert.match(html, /project-installation-main\.mp4/i);
  assert.match(html, /production-tpo-line-redacted\.webp/i);
  assert.match(html, /export@tectaseal\.com/i);
  assert.match(html, /wa\.me\/8618105236093/i);
  assert.match(html, /facebook\.com\/profile\.php\?id=61592341354509/i);
  assert.match(html, /Request a document pack/i);
  assert.doesNotMatch(html, /Oseaguard|欧西盾|codex-preview|SkeletonPreview/i);
});

test("ships the required downloads and brand assets", async () => {
  await Promise.all([
    access(new URL("../public/og.png", import.meta.url)),
    access(new URL("../public/CNAME", import.meta.url)),
    access(new URL("../public/.nojekyll", import.meta.url)),
    access(new URL("../public/assets/factory-pvc.jpg", import.meta.url)),
    access(
      new URL(
        "../public/assets/production-tpo-line-redacted.webp",
        import.meta.url,
      ),
    ),
    access(
      new URL(
        "../public/assets/production-pvc-line-redacted.webp",
        import.meta.url,
      ),
    ),
    access(new URL("../public/assets/field-overview.webp", import.meta.url)),
    access(
      new URL("../public/media/project-installation-main.mp4", import.meta.url),
    ),
    access(
      new URL(
        "../public/downloads/TECTASEAL_Roofing_System_Overview.pdf",
        import.meta.url,
      ),
    ),
    access(
      new URL(
        "../public/downloads/TECTASEAL_Accessories_Catalog.pdf",
        import.meta.url,
      ),
    ),
  ]);

  const [page, layout] = await Promise.all([
    readFile(new URL("../app/page.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/layout.tsx", import.meta.url), "utf8"),
  ]);

  assert.doesNotMatch(page, /Oseaguard|欧西盾/i);
  assert.doesNotMatch(layout, /Oseaguard|欧西盾/i);
});
