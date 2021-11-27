const express = require("express");
const { calcDeadline } = require("./src/functions/calcDeadline");

const app = express();

app.use(express.json());

app.post("/order", function (req, res) {
  const newOrder = req.body;
  const orderOutPut = calcDeadline(
    newOrder.language,
    newOrder.count,
    newOrder.mimetype
  );
  res.send(orderOutPut);
});

app.listen(3000, () => {
  console.log("Server is running");
});
