import { expect, test } from "@playwright/test";

test.describe("Portfolio home", () => {
  test("loads the homepage successfully", async ({ page }) => {
    await page.goto("/");

    await expect(page).toHaveTitle(/Edgar/i);
  });
});