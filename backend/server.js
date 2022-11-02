const express = require("express");
const cors = require("cors");

const db = require("./db.json");

const app = express();

app.use(express.json());
app.use(cors());

app.get("/products", (req, res) => {
  res.json(db.products);
});

app.get("/product/:id", (req, res) => {
  const id = req.params.id;
  console.log(id);
  if (id == "") return res.status(404).send();
  const product = db.products.find((value)=>value.id==id)
  res.json(product)
});

const port = process.env.PORT || 5000;
app.listen(port, console.log(`Server is running on Port ${port}`));
