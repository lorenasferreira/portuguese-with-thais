import { expect, test } from "@playwright/test";
import { calEmbedScript } from "./cal-stub.js";

const routes = [
  ["About", "/about"],
  ["Lessons", "/lessons"],
  ["How It Works", "/method"],
  ["The Brazilian Soul", "/the-brazilian-soul"],
  ["Book a Lesson", "/book-a-lesson"],
  ["Home", "/"],
];

test.beforeEach(async ({ context, baseURL }) => {
  await context.route("**/*", (route) => {
    const url = new URL(route.request().url());
    if (url.href === "https://app.cal.com/embed/embed.js") {
      return route.fulfill({ contentType: "application/javascript", body: calEmbedScript });
    }
    if (url.origin !== baseURL) return route.abort();
    if (url.pathname.startsWith("/__test/cal/")) {
      return route.fulfill({ contentType: "text/html", body: "<title>Test calendar</title>" });
    }
    return route.continue();
  });
});

for (const width of [320, 390, 768, 1440]) {
  test(`header navigation and layout at ${width}px`, async ({ page }) => {
    await page.setViewportSize({ width, height: 900 });
    await page.goto("/");
    const header = page.getByRole("banner");
    const menu = header.getByRole("button", { name: "Open menu" });
    const dialog = page.getByRole("dialog", { name: "Main navigation" });
    const isMobile = width <= 900;

    if (isMobile) {
      await page.keyboard.press("Tab");
      await expect(header.getByRole("link", { name: "Portuguese with Thais" })).toBeFocused();
      await page.keyboard.press("Tab");
      await expect(menu).toBeFocused();
      await page.keyboard.press("Enter");
      await expect(menu).toHaveAttribute("aria-expanded", "true");
      await expect(dialog.getByRole("button", { name: "Close menu" })).toBeFocused();
      await page.keyboard.press("Escape");
      await expect(dialog).toBeHidden();
      await expect(menu).toBeFocused();
      await expect(menu).toHaveAttribute("aria-expanded", "false");
    }

    const navigation = isMobile
      ? dialog.getByRole("navigation", { name: "Mobile navigation" })
      : header.getByRole("navigation", { name: "Main navigation" });

    for (const [name, path] of routes) {
      if (isMobile) await menu.click();
      const link = navigation.getByRole("link", { name, exact: true });
      await link.click();
      await expect(page).toHaveURL(new RegExp(`${path}$`));
      await expect(page.getByRole("main").getByRole("heading", { level: 1 })).toBeVisible();

      if (isMobile) {
        await expect(dialog).toBeHidden();
        await menu.click();
      }
      await expect(link).toHaveAttribute("aria-current", "page");
      if (isMobile) await dialog.getByRole("button", { name: "Close menu" }).click();

      await page.evaluate(() => document.fonts.ready);
      await expect.poll(
        () => page.evaluate(() => document.documentElement.scrollWidth - window.innerWidth),
        { message: `Page-wide overflow on ${path} at ${width}px` },
      ).toBeLessThanOrEqual(0);
    }
  });
}

test("trial CTA and each booking plan leave exactly one calendar iframe", async ({ page }) => {
  await page.goto("/");
  await page.getByRole("main").getByRole("link", { name: "Book a Trial", exact: true }).first().click();
  await expect(page).toHaveURL(/\/book-a-lesson\?plan=trial#booking$/);

  const selector = page.getByRole("combobox", { name: "Choose your lesson or package" });
  const booking = page.locator("#booking");
  const frames = booking.locator("iframe");

  for (const [plan, event, packagePlan] of [
    ["trial", "portuguese-trial", false],
    ["single", "portuguese-private-lesson-50min", false],
    ["flow", "portuguese-flow", true],
    ["pace", "portuguese-pace", true],
    ["mastery", "portuguese-mastery", true],
    ["trial", "portuguese-trial", false],
  ]) {
    if (await selector.inputValue() !== plan) await selector.selectOption(plan);
    await expect(selector).toHaveValue(plan);
    await expect(page).toHaveURL(new RegExp(`[?&]plan=${plan}(?:&|#|$)`));
    await expect(frames).toHaveCount(1);
    await expect(frames).toHaveAttribute("title", "Book a Portuguese lesson");
    await expect(frames).toHaveAttribute("src", `/__test/cal/portuguesewiththais/${event}`);
    await expect(frames).toHaveCount(1);

    const disclosure = booking.getByRole("status");
    if (packagePlan) {
      await expect(disclosure).toContainText("arrange the remaining sessions directly with Thais");
    } else {
      await expect(disclosure).toHaveCount(0);
    }
  }
});
