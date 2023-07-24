const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 5000;
app.use(cors());
const allProducts = require("./data/products.json");

app.get("/", (req, res) => {
  res.send("hello this moon tech guru server");
});
app.get("/allProducts", (req, res) => {
  res.send(allProducts);
});

app.get("/allProducts/:id", (req, res) => {
  const dnId = parseFloat(req.params.id);
  const findDestinationData = allProducts.find((dn) => dn.id === dnId);
  res.send(findDestinationData);
});

app.get("/allProducts", (req, res) => {
  res.send(allProducts);
});

app.listen(port, () => {
  console.log(`moon tech  server start in ${port}`);
});
