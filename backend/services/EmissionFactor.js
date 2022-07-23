import data from "../data.json";

class EmissionFactor {
  getEmissionFactorByCategory(category) {
    const emissionFactor = data.find((ef) => ef.category === category);
    return emissionFactor && emissionFactor.value;
  }
}
export default EmissionFactor;
