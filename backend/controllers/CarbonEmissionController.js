const calculate = (req, res) => {
  try {
    const { query } = req;
    const data = Object.entries(query).map(([category, value]) => {
      const result = categories(category, value);
      return {
        category: category,
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

const categories = (category, value) => {
  if (isNaN(value)) return 0;

  const categories = {
    electricity: (klw) => klw * 2,
    natural_gas: (mc) => mc * 3,
    heating_oil: (mc) => mc * 3,
    coal: (mc) => mc * 3,
    red_meat: (kg) => kg * 2.4,
    white_meat: (kg) => kg * 2.4,
  };

  if (!categories[category]) return 0;

  return categories[category](value);
};

export { categories, calculate };
