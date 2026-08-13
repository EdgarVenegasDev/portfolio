import { expect, test } from "@playwright/test";

test.describe("Portfolio projects", () => {
  test("Cabo101 case study loads", async ({ page }) => {
    await page.goto("/work/cabo101");

    await expect(page).toHaveURL(/\/work\/cabo101$/);
  });

  test("Cabo Bay case study loads", async ({ page }) => {
    await page.goto("/work/cabo-bay");

    await expect(page).toHaveURL(/\/work\/cabo-bay$/);
  });
});