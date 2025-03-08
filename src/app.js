const express = require("express");
const sequelize = require("./config/database");
require("dotenv").config();

const app = express();

const router=require('./routes/schoolRoutes')

app.use(express.json());
app.use('/',router);
const PORT = process.env.PORT || 1000;
app.listen(PORT, async () => {
  try {
    await sequelize.authenticate();
    console.log("Database Connected Successfully!");

    await sequelize.sync({ alter: true }); 
    console.log("Database synced!");

    console.log(`Server is running on port ${PORT}`);
  } catch (error) {
    console.error("Database connection error:", error);
  }
});
