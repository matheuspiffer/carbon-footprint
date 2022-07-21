import express from "express";
import { calculate } from "./controllers/CarbonEmissionController.js";
const router = express.Router();

router.route("/calculate").get(calculate);

export default router;
