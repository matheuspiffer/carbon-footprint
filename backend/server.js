import express from "express";
import routes from "./routes.js";
import cors from "cors";

const PORT = 4000;
const app = express();

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("server is running");
});

app.use("/api", routes);

app.listen(PORT, console.log(`Server running on port ${PORT}`));
