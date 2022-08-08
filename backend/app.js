const express = require("express");
const mongoose = require("mongoose");
const app = express();
const helmet = require("helmet");

app.use(helmet());
app.use(function (req, res, next) {
  res.setHeader("Cross-Origin-Resource-Policy", "same-site"); // it allows images to be loaded
  next();
});

const dotenv = require("dotenv");
dotenv.config();
const DB_USERNAME = process.env.DB_USERNAME;
const DB_PASSWORD = process.env.DB_PASSWORD;
const DB_CLUSTER = process.env.DB_CLUSTER;
const DB_SOURCE = process.env.DB_SOURCE;
const DB_MECHAN = process.env.DB_MECHAN;

mongoose
  .connect(
    `mongodb+srv://${DB_USERNAME}:${DB_PASSWORD}@${DB_CLUSTER}/${DB_SOURCE}&${DB_MECHAN}`,
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(() => console.log("Connexion à MongoDB réussie !"))
  .catch(() => console.log("Connexion à MongoDB échouée !"));

const articlesRoutes = require("./routes/article");
const userRoutes = require("./routes/user");
const bodyParser = require("body-parser");
const path = require("path");

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, PATCH, OPTIONS"
  );
  next();
});

app.use(bodyParser.json());

app.use("/api/articles", articlesRoutes);
app.use("/api/auth", userRoutes);
app.use("/images", express.static(path.join(__dirname, "images")));

module.exports = app;
