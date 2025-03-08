const express = require("express");
const sequelize = require("./config/database");
require("dotenv").config();

const app = express();

app.use(express.json());


app.listen(process.env.PORT, async () => {
  try {
    await sequelize.authenticate();
    console.log("Database Connected Successfully!");

    await sequelize.sync({ alter: true }); 
    console.log("Database synced!");

    console.log(`Server is running on port ${process.env.PORT}`);
  } catch (error) {
    console.error("Database connection error:", error);
  }
});