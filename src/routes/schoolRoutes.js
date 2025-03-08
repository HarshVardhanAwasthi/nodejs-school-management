const express = require("express");
const { Op } = require("sequelize");
const router = express.Router();

const School = require("../model/schoolModel");

const haversineDistance=require("../utils/haversine")

const validatedata = require("../utils/validation");

router.post("/addSchool", async (req, res) => {
  try {
    validatedata(req);
    const { name, address, longitude, latitude } = req.body;

    const school = await School.findOne({
      where: {
        address,
        longitude,
        latitude,
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
      .json({ message: "School added successfully", data: newSchool });
  } catch (error) {
    // console.error("Error adding school:"+error.message);
    res.status(400).json({ error: error.message });
  }
});

router.get("/listSchool/:latitude/:longitude", async (req, res) => {
  try {
    const { latitude, longitude } = req.params;

    const schools = await School.findAll();

    if (schools.length === 0) {
        return res.status(404).json({ message: "No schools found!" });
      }

      const schoolsWithDistances = schools.map(school => {
        const distance = haversineDistance(
          latitude,
          longitude,
          school.latitude,
          school.longitude
        );

        return {...school.toJSON(),distance};
    });

    schoolsWithDistances.sort((a, b) => a.distance - b.distance);

    res.status(201).json({message:"schools",data:schoolsWithDistances})
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;
