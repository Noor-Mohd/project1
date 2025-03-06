const express = require("express");
const User = require("../models/User");

const router = express.Router();

// Get Leaderboard
router.get("/", async (req, res) => {
  try {
    const users = await User.find().sort({ points: -1 });
    res.json(users);
  } catch (err) {
    res.status(400).send("Error fetching leaderboard.");
  }
});

module.exports = router;