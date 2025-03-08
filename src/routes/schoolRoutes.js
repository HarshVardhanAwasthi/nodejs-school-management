const express = require("express");
const { Op } = require("sequelize");
const router = express.Router();

const School = require("../model/schoolModel");

const validatedata = require("../utils/validation");

router.post("/addSchool", async (req, res) => {
  try {
    validatedata(req);
    const { name, address, longitude, latitude } = req.body;
      
    const school = await School.findOne({
      where: {
        name,
        longitude:longitude,
        latitude:latitude,
      },
    });

    if (school) {
      return res.status(409).json({ message: "School already exists!" });
    }

    const newSchool = await School.create({
      name,
      address,
      longitude,
      latitude,
    });

    // console.log("new data  added:", newSchool);
    res
      .status(201)
      .json({ message: "School added successfully", school: newSchool });
  } catch (error) {
    // console.error("Error adding school:"+error.message);
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;
