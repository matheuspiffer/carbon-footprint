const CarbonEmission = require("../services/CarbonEmission");

class CarbonEmissionController {
  static calculate = (req, res) => {
    try {
      const { query } = req;
      const carbonEmission = new CarbonEmission();
      const data = carbonEmission.calculate(query);
      return res.status(200).json(data);
    } catch (error) {
      console.error(error);
      return res.status(500);
    }
  };
}
module.exports = CarbonEmissionController;
