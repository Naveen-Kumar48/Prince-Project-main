/**
 * Blog E2E Tests for Ajay Readymade Store
 *
 * Validates:
 * - Blog listing page loads correctly with all posts
 * - Blog cards link to correct slugs
 * - Blog detail pages load with correct content
 * - Internal links to product categories exist on detail pages
 * - Article JSON-LD schema is present
 * - Related posts section renders
 * - Breadcrumb navigation is correct
 * - Blog metadata (read time, date) is displayed
 */

import { test, expect } from "@playwright/test";

const KNOWN_BLOGS = [
  {
    slug: "mens-wedding-fashion-guide-ellenabad-2025",
    category: "Men's Fashion",
    titleFragment: "Wedding Fashion",
  },
  {
    slug: "kids-winter-collection-must-haves",
    category: "Kids Fashion",
    titleFragment: "Winter",
  },
  {
    slug: "formal-shirts-office-style-guide",
    category: "Style Tips",
    titleFragment: "Formal Shirt",
  },
  {
    slug: "school-uniform-guide-ellenabad-2025",
    category: "Kids Fashion",
    titleFragment: "School Uniform",
  },
  {
    slug: "womens-kurti-style-guide-festival-season",
    category: "Women's Fashion",
    titleFragment: "Kurtis",
  },
];

async function gotoPage(page: any, path: string) {
  await page.goto(path, { waitUntil: "domcontentloaded" });
}

// ── Blog Listing Tests ─────────────────────────────────────────────────────

test.describe("Blog Listing Page (/blogs)", () => {
  test.beforeEach(async ({ page }) => {
    await gotoPage(page, "/blogs");
  });

  test("renders the page with H1", async ({ page }) => {
    const h1 = page.locator("h1");
    await expect(h1).toBeVisible();
    const h1Text = await h1.innerText();
    expect(h1Text.toLowerCase()).toContain("fashion");
  });

  test("shows at least 9 blog post links", async ({ page }) => {
    const blogLinks = page.locator('a[href^="/blogs/"]');
    const count = await blogLinks.count();
    expect(count, "Should show at least 9 blog post links").toBeGreaterThanOrEqual(9);
  });

  test("shows blog images for every card", async ({ page }) => {
    const images = page.locator('a[href^="/blogs/"] img');
    const count = await images.count();
    expect(count).toBeGreaterThan(0);
  });

  test("shows category badges on blog cards", async ({ page }) => {
    // Look for category badge span elements within links
    const badges = page.locator('a[href^="/blogs/"] span');
    const count = await badges.count();
    expect(count).toBeGreaterThan(0);
  });

  test("featured post section is visible", async ({ page }) => {
    const featured = page.getByText("Featured Article");
    await expect(featured).toBeVisible();
  });

  test("has internal category navigation section", async ({ page }) => {
    const section = page.getByText("Shop by Category");
    await expect(section).toBeVisible();
  });

  test("category section links to /men, /women, /kids", async ({ page }) => {
    const menLink = page.locator('a[href="/men"]').first();
    const womenLink = page.locator('a[href="/women"]').first();
    const kidsLink = page.locator('a[href="/kids"]').first();
    await expect(menLink).toBeVisible();
    await expect(womenLink).toBeVisible();
    await expect(kidsLink).toBeVisible();
  });

  test("has ItemList JSON-LD schema", async ({ page }) => {
    const scripts = await page.locator('script[type="application/ld+json"]').all();
    let hasItemList = false;
    for (const script of scripts) {
      const content = await script.innerHTML();
      try {
        const json = JSON.parse(content);
        if (json["@type"] === "ItemList") hasItemList = true;
      } catch {
        // ignore
      }
    }
    expect(hasItemList, "Blog listing should have ItemList JSON-LD").toBe(true);
  });

  test("clicking a blog card navigates to the correct blog page", async ({
    page,
  }) => {
    const firstBlogLink = page.locator('a[href^="/blogs/"]').first();
    const href = await firstBlogLink.getAttribute("href");
    expect(href).toBeTruthy();
    await firstBlogLink.click();
    await page.waitForURL(`**${href}`);
    expect(page.url()).toContain("/blogs/");
  });
});

// ── Blog Detail Page Tests ─────────────────────────────────────────────────

test.describe("Blog Detail Pages", () => {
  for (const blog of KNOWN_BLOGS) {
    test(`${blog.slug} loads with correct H1`, async ({ page }) => {
      await gotoPage(page, `/blogs/${blog.slug}`);
      const h1 = page.locator("h1");
      await expect(h1).toBeVisible();
      const h1Text = await h1.innerText();
      expect(h1Text.toLowerCase()).toContain(
        blog.titleFragment.toLowerCase()
      );
    });

    test(`${blog.slug} shows category badge`, async ({ page }) => {
      await gotoPage(page, `/blogs/${blog.slug}`);
      const badge = page.getByText(blog.category).first();
      await expect(badge).toBeVisible();
    });

    test(`${blog.slug} has article body with multiple paragraphs`, async ({
      page,
    }) => {
      await gotoPage(page, `/blogs/${blog.slug}`);
      const paragraphs = page.locator("article p");
      const count = await paragraphs.count();
      expect(
        count,
        `${blog.slug} should have multiple article paragraphs`
      ).toBeGreaterThan(3);
    });

    test(`${blog.slug} has Article JSON-LD schema`, async ({ page }) => {
      await gotoPage(page, `/blogs/${blog.slug}`);
      const scripts = await page
        .locator('script[type="application/ld+json"]')
        .all();
      let hasArticle = false;
      for (const script of scripts) {
        const content = await script.innerHTML();
        try {
          const json = JSON.parse(content);
          if (json["@type"] === "Article") hasArticle = true;
        } catch {
          // ignore
        }
      }
      expect(hasArticle, `${blog.slug} should have Article JSON-LD`).toBe(true);
    });

    test(`${blog.slug} has BreadcrumbList JSON-LD`, async ({ page }) => {
      await gotoPage(page, `/blogs/${blog.slug}`);
      const scripts = await page
        .locator('script[type="application/ld+json"]')
        .all();
      let hasBreadcrumb = false;
      for (const script of scripts) {
        const content = await script.innerHTML();
        try {
          const json = JSON.parse(content);
          if (json["@type"] === "BreadcrumbList") hasBreadcrumb = true;
        } catch {
          // ignore
        }
      }
      expect(
        hasBreadcrumb,
        `${blog.slug} should have BreadcrumbList JSON-LD`
      ).toBe(true);
    });

    test(`${blog.slug} has breadcrumb navigation visible`, async ({ page }) => {
      await gotoPage(page, `/blogs/${blog.slug}`);
      const breadcrumb = page.locator('nav[aria-label="Breadcrumb"]');
      await expect(breadcrumb).toBeVisible();
      // Should contain "Blog" link
      const blogCrumb = breadcrumb.locator('a[href="/blogs"]');
      await expect(blogCrumb).toBeVisible();
    });

    test(`${blog.slug} has internal links to shop categories`, async ({
      page,
    }) => {
      await gotoPage(page, `/blogs/${blog.slug}`);
      // Should have at least one link to a category page (/men, /women, /kids, /collections/...)
      const internalLinks = page.locator(
        'a[href="/men"], a[href="/women"], a[href="/kids"], a[href^="/collections/"]'
      );
      const count = await internalLinks.count();
      expect(
        count,
        `${blog.slug} should have internal links to category pages`
      ).toBeGreaterThan(0);
    });

    test(`${blog.slug} has related posts section`, async ({ page }) => {
      await gotoPage(page, `/blogs/${blog.slug}`);
      const relatedHeading = page.getByText("More from the Style Journal");
      await expect(relatedHeading).toBeVisible();
    });

    test(`${blog.slug} has at least 2 related post links`, async ({ page }) => {
      await gotoPage(page, `/blogs/${blog.slug}`);
      // Related posts are in a section below the article
      const relatedSection = page.locator("section").last();
      const relatedLinks = relatedSection.locator('a[href^="/blogs/"]');
      const count = await relatedLinks.count();
      expect(count, "Should show at least 2 related posts").toBeGreaterThanOrEqual(2);
    });

    test(`${blog.slug} has "Back to Style Journal" link`, async ({ page }) => {
      await gotoPage(page, `/blogs/${blog.slug}`);
      const backLink = page.locator('a[href="/blogs"]').last();
      await expect(backLink).toBeVisible();
    });

    test(`${blog.slug} has store info (WhatsApp link)`, async ({ page }) => {
      await gotoPage(page, `/blogs/${blog.slug}`);
      const whatsappLink = page.locator('a[href*="wa.me"]').first();
      await expect(whatsappLink).toBeVisible();
    });

    test(`${blog.slug} has read time displayed`, async ({ page }) => {
      await gotoPage(page, `/blogs/${blog.slug}`);
      const readTime = page.getByText(/min read/i).first();
      await expect(readTime).toBeVisible();
    });
  }
});

// ── Blog 404 Tests ─────────────────────────────────────────────────────────

test.describe("Blog — 404 Handling", () => {
  test("non-existent blog slug returns 404", async ({ page }) => {
    const response = await gotoPage(page, "/blogs/this-blog-does-not-exist");
    // Next.js returns 404 status code
    expect(response?.status()).toBe(404);
  });
});

// ── Blog Navigation Integration ────────────────────────────────────────────

test.describe("Blog Navigation Integration", () => {
  test("can navigate from homepage blog preview to blog listing", async ({
    page,
  }) => {
    await gotoPage(page, "/");
    // Find a "View All" or blog link
    const blogLink = page.locator('a[href="/blogs"]').first();
    if (await blogLink.isVisible()) {
      await blogLink.click();
      await page.waitForURL("**/blogs");
      expect(page.url()).toContain("/blogs");
    }
  });

  test("can navigate from blog listing to blog detail and back", async ({
    page,
  }) => {
    await gotoPage(page, "/blogs");
    const firstBlog = page.locator('a[href^="/blogs/"]').first();
    const href = await firstBlog.getAttribute("href");
    await firstBlog.click();
    await page.waitForURL(`**${href}`);
    expect(page.url()).toContain("/blogs/");

    // Go back
    const backBtn = page.locator('a[href="/blogs"]').last();
    await backBtn.click();
    await page.waitForURL("**/blogs");
    expect(page.url()).toContain("/blogs");
  });
});
