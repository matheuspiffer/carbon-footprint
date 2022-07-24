const express = require("express");
const CarbonEmissionController = require("./controllers/CarbonEmissionController");
const router = express.Router();

router.route("/calculate").get(CarbonEmissionController.calculate);

module.exports = router;
