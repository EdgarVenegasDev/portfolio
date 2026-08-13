import { expect, test } from "@playwright/test";

test.describe("Language switching", () => {
  test("starts in English by default", async ({ page }) => {
    await page.goto("/");

    await expect(
      page.getByText("Software Engineer", { exact: true }),
    ).toBeVisible();

    await expect(
      page.getByText("Descubre lo que me apasiona", { exact: true }),
    ).not.toBeVisible();
  });

  test("switches from English to Spanish", async ({ page }) => {
    await page.goto("/");

    await page.getByRole("button", { name: "Es", exact: true }).click();

    await expect(
      page.getByText("Ingeniero de Software", { exact: true }),
    ).toBeVisible();

    await expect(
      page.getByText("Software Engineer", { exact: true }),
    ).not.toBeVisible();
  });

  test("persists Spanish after reload", async ({ page }) => {
    await page.goto("/");

    await page.getByRole("button", { name: "Es", exact: true }).click();

    await expect(
      page.getByText("Ingeniero de Software", { exact: true }),
    ).toBeVisible();

    await page.reload();

    await expect(
      page.getByText("Ingeniero de Software", { exact: true }),
    ).toBeVisible();

    await expect(
      page.getByText("Software Engineer", { exact: true }),
    ).not.toBeVisible();
  });

  test("switches from Spanish back to English", async ({ page }) => {
    await page.goto("/");

    await page.getByRole("button", { name: "Es", exact: true }).click();

    await expect(
      page.getByText("Ingeniero de Software", { exact: true }),
    ).toBeVisible();

    await page.getByRole("button", { name: "En", exact: true }).click();

    await expect(
      page.getByText("Software Engineer", { exact: true }),
    ).toBeVisible();

    await expect(
      page.getByText("Ingeniero de Software", { exact: true }),
    ).not.toBeVisible();
  });
});