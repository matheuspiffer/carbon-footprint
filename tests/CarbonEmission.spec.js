import CarbonEmission from "../backend/services/CarbonEmission.js";

describe("Class - Carbon Emission", () => {
  const carbonEmission = new CarbonEmission();
  it("should return calculated categories", () => {
    const obj = {
      electricity: 1,
      natural_gas: 1,
      fuel_oil: 1,
      lpg: 1,
      gasoline: 1,
    };
    const result = carbonEmission.calculate(obj);
    const expectedResult = [
      { category: "electricity", total: 0.42964269 },
      { category: "natural_gas", total: 11.7 },
      { category: "fuel_oil", total: 2.701 },
      { category: "lpg", total: 1.489441979 },
      { category: "gasoline", total: 2.3485 },
    ];
    expect(result).toEqual(expectedResult);
  });
  it("should return 0 when value is string", () => {
    const result = carbonEmission.calculateByCategory("electricity", "abc");
    expect(result).toBe(0);
  });
  it("should return 0 when category is not found", () => {
    const result = carbonEmission.calculateByCategory("abcd1", 23);
    expect(result).toBe(0);
  });
});
