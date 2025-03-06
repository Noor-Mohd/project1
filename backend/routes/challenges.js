const express = require("express");
const Challenge = require("../models/Challenge");

const router = express.Router();

// Get All Challenges
router.get("/", async (req, res) => {
  try {
    const challenges = await Challenge.find();
    res.json(challenges);
  } catch (err) {
    res.status(400).send("Error fetching challenges.");
  }
});

// Create Challenge (Admin Only)
router.post("/", async (req, res) => {
  const { title, description, points } = req.body;
  try {
    const challenge = new Challenge({ title, description, points });
    await challenge.save();
    res.status(201).send("Challenge created.");
  } catch (err) {
    res.status(400).send("Error creating challenge.");
  }
});

module.exports = router;