const express = require("express");
const app = express();
const port = 3000;

const logger = (req, res) => {
  console.log(
    req.params.logGroup ? `[${req.params.logGroup}]` : "[No Log Group]",
    req.body ? req.body : "No body"
  );
  res.send("Ack");
};

app.get("/", logger);
app.post("/", logger);
app.get("/:logGroup", logger);
app.post("/:logGroup", logger);

app.listen(port, () => {
  console.log(`Observer listening at http://localhost:${port}`);
});
