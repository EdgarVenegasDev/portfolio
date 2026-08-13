import { describe, expect, it } from "vitest";

import { caseStudies } from "@/lib/data/caseStudies";

describe("caseStudies", () => {
  it("contains both supported languages", () => {
    expect(caseStudies.en).toBeDefined();
    expect(caseStudies.es).toBeDefined();
  });

  it("contains both portfolio projects in English and Spanish", () => {
    for (const language of ["en", "es"] as const) {
      expect(caseStudies[language].cabo101).toBeDefined();
      expect(caseStudies[language]["cabo-bay"]).toBeDefined();
    }
  });

  it("keeps project titles consistent across languages", () => {
    expect(caseStudies.en.cabo101.title).toBe("Cabo101");
    expect(caseStudies.es.cabo101.title).toBe("Cabo101");

    expect(caseStudies.en["cabo-bay"].title).toBe("Cabo Bay");
    expect(caseStudies.es["cabo-bay"].title).toBe("Cabo Bay");
  });

  it("contains the required content for every case study", () => {
    const requiredFields = [
      "category",
      "title",
      "tagline",
      "summary",
      "github",
      "overview",
      "problem",
      "solution",
      "architecture",
      "integrations",
      "challenges",
      "learned",
      "technology",
    ] as const;

    for (const language of ["en", "es"] as const) {
      for (const project of ["cabo101", "cabo-bay"] as const) {
        const caseStudy = caseStudies[language][project];

        for (const field of requiredFields) {
          expect(caseStudy[field]).toBeDefined();
        }
      }
    }
  });

  it("contains architecture and technology information for every project", () => {
    for (const language of ["en", "es"] as const) {
      for (const project of ["cabo101", "cabo-bay"] as const) {
        const caseStudy = caseStudies[language][project];

        expect(caseStudy.architecture.length).toBeGreaterThan(0);
        expect(caseStudy.technology.length).toBeGreaterThan(0);

        for (const technologyGroup of caseStudy.technology) {
          expect(technologyGroup.group).toBeTruthy();
          expect(technologyGroup.items.length).toBeGreaterThan(0);
        }
      }
    }
  });
});