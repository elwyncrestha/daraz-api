const express = require("express");
const router = express.Router();
const Collection = require("../model/Collection");

// Get All
router.get("/", async (req, res) => {
  try {
    const collections = await Collection.find();
    res.status(200).json(collections);
  } catch (err) {
    res.status(500).json({ message: err });
  }
});

module.exports = router;
