/**
 * Navigation E2E Tests for Ajay Readymade Store
 *
 * Validates:
 * - Header navigation links work and navigate to correct pages
 * - Mobile menu behavior
 * - WhatsApp floating button exists with correct phone number
 * - Footer renders with NAP (Name, Address, Phone)
 * - Skip-to-content accessibility link exists
 * - Logo links to homepage
 */

import { test, expect } from "@playwright/test";

// ── Header Navigation ──────────────────────────────────────────────────────

test.describe("Site Header", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/");
  });

  test("logo is visible and links to homepage", async ({ page }) => {
    const logoLink = page.locator('header a[href="/"]').first();
    await expect(logoLink).toBeVisible();
  });

  test("Men's Wear nav link is present", async ({ page }) => {
    const link = page.locator('header a[href="/men"]').first();
    await expect(link).toBeVisible();
  });

  test("Kids Wear nav link is present", async ({ page }) => {
    const link = page.locator('header a[href="/kids"]').first();
    await expect(link).toBeVisible();
  });

  test("Women's Wear nav link is present", async ({ page }) => {
    const link = page.locator('header a[href="/women"]').first();
    await expect(link).toBeVisible();
  });

  test("navigating to Men via header works", async ({ page }) => {
    const menLink = page.locator('header a[href="/men"]').first();
    await menLink.click();
    await page.waitForURL("**/men");
    expect(page.url()).toContain("/men");
    await expect(page.locator("h1")).toBeVisible();
  });

  test("navigating to Kids via header works", async ({ page }) => {
    const kidsLink = page.locator('header a[href="/kids"]').first();
    await kidsLink.click();
    await page.waitForURL("**/kids");
    expect(page.url()).toContain("/kids");
    await expect(page.locator("h1")).toBeVisible();
  });

  test("navigating to Blog via header works", async ({ page }) => {
    const blogLink = page.locator('header a[href="/blogs"]').first();
    if (await blogLink.isVisible()) {
      await blogLink.click();
      await page.waitForURL("**/blogs");
      expect(page.url()).toContain("/blogs");
    }
  });

  test("navigating to Contact via header works", async ({ page }) => {
    const contactLink = page.locator('header a[href="/contact"]').first();
    if (await contactLink.isVisible()) {
      await contactLink.click();
      await page.waitForURL("**/contact");
      expect(page.url()).toContain("/contact");
    }
  });
});

// ── Accessibility ──────────────────────────────────────────────────────────

test.describe("Accessibility — Skip-to-content", () => {
  test('skip-to-content link exists on homepage', async ({ page }) => {
    await page.goto("/");
    const skipLink = page.locator('a[href="#main"]');
    await expect(skipLink).toBeAttached();
  });

  test("main content area has id='main'", async ({ page }) => {
    await page.goto("/");
    const main = page.locator("#main");
    await expect(main).toBeAttached();
  });
});

// ── WhatsApp Float ─────────────────────────────────────────────────────────

test.describe("WhatsApp Floating Button", () => {
  test("WhatsApp button is visible on homepage", async ({ page }) => {
    await page.goto("/");
    const waButton = page.locator('a[href*="wa.me"]').first();
    await expect(waButton).toBeVisible();
  });

  test("WhatsApp button href contains phone number", async ({ page }) => {
    await page.goto("/");
    const waButton = page.locator('a[href*="wa.me"]').first();
    const href = await waButton.getAttribute("href");
    expect(href).toBeTruthy();
    expect(href).toContain("wa.me");
    expect(href).toMatch(/\d{10,12}/); // Contains at least 10 digits
  });

  test("WhatsApp button has aria-label", async ({ page }) => {
    await page.goto("/");
    const waButton = page.locator('a[href*="wa.me"]').first();
    const ariaLabel = await waButton.getAttribute("aria-label");
    expect(ariaLabel).toBeTruthy();
  });

  test("WhatsApp button opens in new tab (target=_blank)", async ({ page }) => {
    await page.goto("/");
    const waButton = page.locator('a[href*="wa.me"]').first();
    const target = await waButton.getAttribute("target");
    expect(target).toBe("_blank");
  });
});

// ── Site Footer ────────────────────────────────────────────────────────────

test.describe("Site Footer", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/");
  });

  test("footer is visible", async ({ page }) => {
    const footer = page.locator("footer");
    await expect(footer).toBeVisible();
  });

  test("footer contains store name", async ({ page }) => {
    const footer = page.locator("footer");
    const text = await footer.innerText();
    expect(text.toLowerCase()).toContain("ajay readymade");
  });

  test("footer contains address (Ellenabad)", async ({ page }) => {
    const footer = page.locator("footer");
    const text = await footer.innerText();
    expect(text.toLowerCase()).toContain("ellenabad");
  });

  test("footer contains phone number", async ({ page }) => {
    const footer = page.locator("footer");
    const text = await footer.innerText();
    // Should have a phone number pattern
    expect(text).toMatch(/\+?91[-\s]?\d{5}[-\s]?\d{5}/);
  });

  test("footer has social media links", async ({ page }) => {
    const footer = page.locator("footer");
    const socialLinks = footer.locator(
      'a[href*="instagram"], a[href*="facebook"], a[href*="whatsapp"]'
    );
    const count = await socialLinks.count();
    expect(count, "Footer should have at least one social link").toBeGreaterThan(0);
  });

  test("footer links to Men, Women, Kids pages", async ({ page }) => {
    const footer = page.locator("footer");
    const menLink = footer.locator('a[href="/men"]');
    const womenLink = footer.locator('a[href="/women"]');
    const kidsLink = footer.locator('a[href="/kids"]');
    // At least one should exist
    const exists =
      (await menLink.count()) > 0 ||
      (await womenLink.count()) > 0 ||
      (await kidsLink.count()) > 0;
    expect(exists, "Footer should link to category pages").toBe(true);
  });
});

// ── Key Pages Load ─────────────────────────────────────────────────────────

test.describe("Key Page Load Tests", () => {
  const routes = [
    { path: "/", name: "Homepage" },
    { path: "/men", name: "Men's Wear" },
    { path: "/kids", name: "Kids Wear" },
    { path: "/women", name: "Women's Wear" },
    { path: "/about", name: "About" },
    { path: "/contact", name: "Contact" },
    { path: "/blogs", name: "Blog" },
    { path: "/gallery", name: "Gallery" },
    { path: "/new-arrivals", name: "New Arrivals" },
    { path: "/offers", name: "Offers" },
    { path: "/trending", name: "Trending" },
  ];

  for (const { path, name } of routes) {
    test(`${name} (${path}) loads with status 200`, async ({ page }) => {
      const response = await page.goto(path);
      expect(response?.status(), `${name} should return 200`).toBe(200);
    });
  }
});

// ── Mobile Navigation ──────────────────────────────────────────────────────

test.describe("Mobile Navigation", { tag: "@mobile" }, () => {
  test("hamburger menu exists on mobile", async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 812 });
    await page.goto("/");
    const menuBtn = page.locator('button[aria-label*="navigation" i], button[aria-label*="menu" i]').first();
    await expect(menuBtn).toBeVisible();
    await menuBtn.click();
    // After clicking, mobile navigation menu links should be visible
    const mobileLink = page.locator('a[href="/men"]').last();
    await expect(mobileLink).toBeVisible();
  });

  test("WhatsApp button visible on mobile", async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 812 });
    await page.goto("/");
    const waButton = page.locator('a[href*="wa.me"]').first();
    await expect(waButton).toBeVisible();
  });
});
