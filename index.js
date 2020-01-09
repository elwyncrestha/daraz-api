const express = require("express");
require("dotenv/config");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

// Middlewares
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

// Routes
const productRoute = require("./routes/products");
app.use("/products", productRoute);
const collectionRoute = require("./routes/collections");
app.use("/collections", collectionRoute);

// Database connection
mongoose.connect(
  process.env.DB_CONNECTION,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => console.log("Connected to database!!!")
);

// Listen to the server
app.listen(process.env.SERVER_PORT);
