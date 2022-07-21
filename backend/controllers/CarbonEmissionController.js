const calculate = (req, res) => {
  try {
    const { query } = req;
    const data = Object.entries(query).map(([option, value]) => {
      const result = options(option, value);
      return {
        option: option,
        total: result,
      };
    });

    console.log(data);

    return res.status(201).json(data);
  } catch (error) {
    console.error(error);
    return res.status(500);
  }
};

const options = (option, value) => {
  if (isNaN(value)) return 0;

  const options = {
    electricity: (klw) => klw * 2,
    natural_gas: (mc) => mc * 3,
    heating_oil: (mc) => mc * 3,
    coal: (mc) => mc * 3,
    red_meat: (kg) => kg * 2.4,
    white_meat: (kg) => kg * 2.4,
  };

  if (!options[option]) return 0;

  return options[option](value);
};

export { options, calculate };
