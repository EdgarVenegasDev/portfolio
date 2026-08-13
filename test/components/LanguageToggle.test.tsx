import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, beforeEach } from "vitest";

import LanguageToggle from "@/components/ui/LanguageToggle";
import { LanguageProvider } from "@/lib/i18n/LanguageProvider";

function renderLanguageToggle() {
  return render(
    <LanguageProvider>
      <LanguageToggle />
    </LanguageProvider>,
  );
}

describe("LanguageToggle", () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it("renders both language options", () => {
    renderLanguageToggle();

    expect(
      screen.getByRole("button", { name: "Es" }),
    ).toBeInTheDocument();

    expect(
      screen.getByRole("button", { name: "En" }),
    ).toBeInTheDocument();
  });

  it("uses English by default", () => {
    renderLanguageToggle();

    const englishButton = screen.getByRole("button", {
      name: "En",
    });

    expect(englishButton).toHaveClass("bg-[var(--ink)]");
  });

  it("changes the language to Spanish", async () => {
    const user = userEvent.setup();

    renderLanguageToggle();

    await user.click(
      screen.getByRole("button", { name: "Es" }),
    );

    expect(
      screen.getByRole("button", { name: "Es" }),
    ).toHaveClass("bg-[var(--ink)]");

    expect(
      screen.getByRole("button", { name: "En" }),
    ).not.toHaveClass("bg-[var(--ink)]");
  });

  it("stores the selected language in localStorage", async () => {
    const user = userEvent.setup();

    renderLanguageToggle();

    await user.click(
      screen.getByRole("button", { name: "Es" }),
    );

    expect(
      localStorage.getItem("portfolio-language"),
    ).toBe("es");
  });
});