const express = require("express");

const router = express.Router();

router.get("/movies", (req, res) => {
  res.end("WWW!!!");
});

module.exports = router;
