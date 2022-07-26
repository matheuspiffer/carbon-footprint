const express = require("express");
const routes = require("./routes");
const cors = require("cors");

const PORT = 4000;
const app = express();

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("server is running");
});

app.use("/api", routes);

app.listen(PORT, console.log(`Server running on port ${PORT}`));
