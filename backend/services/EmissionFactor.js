const data = require("../data.json");

class EmissionFactor {
  getEmissionFactorByCategory(category) {
    const emissionFactor = data.find((ef) => ef.category === category);
    return emissionFactor && emissionFactor.value;
  }
}
module.exports = EmissionFactor;
