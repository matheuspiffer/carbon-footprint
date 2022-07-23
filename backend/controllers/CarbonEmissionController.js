import CarbonEmission from "../services/CarbonEmission.js";

const calculate = (req, res) => {
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

export { calculate };
