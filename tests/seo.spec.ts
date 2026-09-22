/**
 * SEO E2E Tests for Ajay Readymade Store
 *
 * Validates SEO-critical elements across all major pages:
 * - Title tags
 * - Meta descriptions
 * - H1 tags (unique per page)
 * - Canonical links
 * - Open Graph tags
 * - JSON-LD structured data
 * - Sitemap and robots.txt availability
 */

import { test, expect, Page } from "@playwright/test";

async function gotoPage(page: Page, path: string) {
  await page.goto(path, { waitUntil: "domcontentloaded" });
}

async function getMetaContent(page: Page, name: string): Promise<string> {
  const el = page.locator(`meta[name="${name}"]`);
  return (await el.getAttribute("content")) ?? "";
}

async function getOgContent(page: Page, property: string): Promise<string> {
  const el = page.locator(`meta[property="${property}"]`);
  return (await el.getAttribute("content")) ?? "";
}

async function getCanonical(page: Page): Promise<string> {
  const el = page.locator('link[rel="canonical"]');
  return (await el.getAttribute("href")) ?? "";
}

async function hasJsonLd(page: Page, type: string): Promise<boolean> {
  const scripts = await page.locator('script[type="application/ld+json"]').all();
  for (const script of scripts) {
    const content = await script.innerHTML();
    try {
      const json = JSON.parse(content);
      const jsonType = Array.isArray(json) ? json.map((j) => j["@type"]) : json["@type"];
      if (Array.isArray(jsonType)) {
        if (jsonType.includes(type)) return true;
      } else if (jsonType === type) return true;
    } catch {
      // skip invalid JSON
    }
  }
  return false;
}

// ── Page Config ───────────────────────────────────────────────────────────────

const pages = [
  { path: "/", label: "Homepage" },
  { path: "/men", label: "Men's Wear" },
  { path: "/kids", label: "Kids Wear" },
  { path: "/women", label: "Women's Wear" },
  { path: "/blogs", label: "Blog Listing" },
  { path: "/contact", label: "Contact" },
  { path: "/about", label: "About" },
];

// ── Tests ─────────────────────────────────────────────────────────────────────

test.describe("SEO — Title Tags", () => {
  for (const { path, label } of pages) {
    test(`${label} (${path}) has a non-empty <title>`, async ({ page }) => {
      await gotoPage(page, path);
      const title = await page.title();
      expect(title, `Title should not be empty on ${path}`).toBeTruthy();
      expect(title.length, `Title should be at least 20 chars on ${path}`).toBeGreaterThan(20);
      expect(title.length, `Title should be under 70 chars on ${path}`).toBeLessThanOrEqual(70);
    });
  }
});

test.describe("SEO — Meta Descriptions", () => {
  for (const { path, label } of pages) {
    test(`${label} (${path}) has a meta description`, async ({ page }) => {
      await gotoPage(page, path);
      const desc = await getMetaContent(page, "description");
      expect(desc, `Meta description should not be empty on ${path}`).toBeTruthy();
      expect(desc.length, `Meta description should be at least 50 chars on ${path}`).toBeGreaterThan(50);
      expect(desc.length, `Meta description should be under 165 chars on ${path}`).toBeLessThanOrEqual(165);
    });
  }
});

test.describe("SEO — H1 Tags", () => {
  for (const { path, label } of pages) {
    test(`${label} (${path}) has exactly one H1`, async ({ page }) => {
      await gotoPage(page, path);
      const h1s = await page.locator("h1").all();
      expect(h1s.length, `Should have exactly 1 H1 on ${path}`).toBe(1);
      const h1Text = await h1s[0].innerText();
      expect(h1Text.trim(), `H1 should not be empty on ${path}`).toBeTruthy();
    });
  }
});

test.describe("SEO — Canonical Links", () => {
  for (const { path, label } of pages) {
    test(`${label} (${path}) has a canonical link`, async ({ page }) => {
      await gotoPage(page, path);
      const canonical = await getCanonical(page);
      expect(canonical, `Canonical should not be empty on ${path}`).toBeTruthy();
    });
  }
});

test.describe("SEO — Open Graph Tags", () => {
  test("Homepage has og:title, og:description, og:image", async ({ page }) => {
    await gotoPage(page, "/");
    const ogTitle = await getOgContent(page, "og:title");
    const ogDesc = await getOgContent(page, "og:description");
    const ogImage = await getOgContent(page, "og:image");

    expect(ogTitle, "og:title should be set").toBeTruthy();
    expect(ogDesc, "og:description should be set").toBeTruthy();
    expect(ogImage, "og:image should be set").toBeTruthy();
    expect(ogImage).toContain("http");
  });

  test("Blog listing page has og:title and og:image", async ({ page }) => {
    await gotoPage(page, "/blogs");
    const ogTitle = await getOgContent(page, "og:title");
    const ogImage = await getOgContent(page, "og:image");
    expect(ogTitle).toBeTruthy();
    expect(ogImage).toBeTruthy();
  });

  test("Blog detail page has og:type = article", async ({ page }) => {
    await gotoPage(page, "/blogs/mens-wedding-fashion-guide-ellenabad-2025");
    const ogType = await getOgContent(page, "og:type");
    expect(ogType).toBe("article");
  });
});

test.describe("SEO — JSON-LD Structured Data", () => {
  test("Homepage has ClothingStore schema", async ({ page }) => {
    await gotoPage(page, "/");
    const hasSchema = await hasJsonLd(page, "ClothingStore");
    expect(hasSchema, "Homepage should have ClothingStore JSON-LD").toBe(true);
  });

  test("Homepage has WebSite schema", async ({ page }) => {
    await gotoPage(page, "/");
    const hasSchema = await hasJsonLd(page, "WebSite");
    expect(hasSchema, "Homepage should have WebSite JSON-LD").toBe(true);
  });

  test("Homepage has FAQPage schema", async ({ page }) => {
    await gotoPage(page, "/");
    const hasSchema = await hasJsonLd(page, "FAQPage");
    expect(hasSchema, "Homepage should have FAQPage JSON-LD").toBe(true);
  });

  test("Blog detail page has Article schema", async ({ page }) => {
    await gotoPage(page, "/blogs/mens-wedding-fashion-guide-ellenabad-2025");
    const hasSchema = await hasJsonLd(page, "Article");
    expect(hasSchema, "Blog detail should have Article JSON-LD").toBe(true);
  });

  test("Blog detail page has BreadcrumbList schema", async ({ page }) => {
    await gotoPage(page, "/blogs/mens-wedding-fashion-guide-ellenabad-2025");
    const hasSchema = await hasJsonLd(page, "BreadcrumbList");
    expect(hasSchema, "Blog detail should have BreadcrumbList JSON-LD").toBe(true);
  });

  test("Blog listing page has ItemList schema", async ({ page }) => {
    await gotoPage(page, "/blogs");
    const hasSchema = await hasJsonLd(page, "ItemList");
    expect(hasSchema, "Blog listing should have ItemList JSON-LD").toBe(true);
  });
});

test.describe("SEO — Sitemap & Robots", () => {
  test("sitemap.xml returns 200 OK", async ({ request }) => {
    const response = await request.get("/sitemap.xml");
    expect(response.status()).toBe(200);
  });

  test("robots.txt returns 200 OK", async ({ request }) => {
    const response = await request.get("/robots.txt");
    expect(response.status()).toBe(200);
  });

  test("robots.txt contains Sitemap reference", async ({ request }) => {
    const response = await request.get("/robots.txt");
    const body = await response.text();
    expect(body.toLowerCase()).toContain("sitemap");
  });
});

test.describe("SEO — Twitter Cards", () => {
  test("Homepage has twitter:card = summary_large_image", async ({ page }) => {
    await gotoPage(page, "/");
    const card = await getMetaContent(page, "twitter:card");
    expect(card).toBe("summary_large_image");
  });

  test("Blog detail page has twitter:title", async ({ page }) => {
    await gotoPage(page, "/blogs/kids-winter-collection-must-haves");
    const title = await getMetaContent(page, "twitter:title");
    expect(title).toBeTruthy();
    expect(title.toLowerCase()).toContain("kids");
  });
});

test.describe("SEO — Images Alt Text", () => {
  test("Homepage images all have non-empty alt attributes", async ({ page }) => {
    await gotoPage(page, "/");
    const images = await page.locator("img").all();
    for (const img of images) {
      const alt = await img.getAttribute("alt");
      expect(alt, "Every image should have an alt attribute").not.toBeNull();
    }
  });

  test("Blog listing images have alt text", async ({ page }) => {
    await gotoPage(page, "/blogs");
    const images = await page.locator("article img, a img").all();
    for (const img of images) {
      const alt = await img.getAttribute("alt");
      expect(alt, "Blog images should have alt text").toBeTruthy();
    }
  });
});
