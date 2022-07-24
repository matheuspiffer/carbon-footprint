const EmissionFactor = require("./EmissionFactor");
class CarbonEmission extends EmissionFactor {
  calculate(object) {
    return Object.entries(object).map(([category, value]) => ({
      category,
      total: this.calculateByCategory(category, value),
    }));
  }

  calculateByCategory(category, value) {
    if (isNaN(value)) return 0;
    const emissionFactor = this.getEmissionFactorByCategory(category);
    if (!emissionFactor) return 0;
    return value * emissionFactor;
  }
}

module.exports = CarbonEmission;
