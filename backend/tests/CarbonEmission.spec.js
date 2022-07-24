const CarbonEmission = require("../services/CarbonEmission");

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

  it("should return 0 when value is a string", () => {
    const result = carbonEmission.calculateByCategory("electricity", "abc");
    expect(result).toBe(0);
  });
  it("should return 0 when category is not found", () => {
    const result = carbonEmission.calculateByCategory("abcd1", 23);
    expect(result).toBe(0);
  });
  it("should calculate electricity", () => {
    const result = carbonEmission.calculateByCategory("electricity", 1);
    expect(result).toBe(0.42964269);
  });
  it("should calculate natural gas", () => {
    const result = carbonEmission.calculateByCategory("natural_gas", 1);
    expect(result).toBe(11.7);
  });
  it("should calculate fuel oil", () => {
    const result = carbonEmission.calculateByCategory("fuel_oil", 1);
    expect(result).toBe(2.701);
  });
  it("should calculate gasoline", () => {
    const result = carbonEmission.calculateByCategory("gasoline", 1);
    expect(result).toBe(2.3485);
  });
});
