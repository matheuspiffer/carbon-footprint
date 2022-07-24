const EmissionFactor = require("../services/EmissionFactor");

describe("Class - Emission Factor", () => {
  const emissionFactor = new EmissionFactor();
  it("should get electricity EF", () => {
    const result = emissionFactor.getEmissionFactorByCategory("electricity");
    expect(result).toBe(0.42964269);
  });
  it("should return undefined for category not found", () => {
    const result = emissionFactor.getEmissionFactorByCategory("abc");
    expect(result).toBe(undefined);
  });
});
