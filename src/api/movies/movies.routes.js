const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
  return res.send("SERVER FUNCIONANDO");
});

router.get("/one", (req, res) => {
  return res.send("Movies one");
});
router.get("/two", (req, res) => {
  return res.send("Movies two");
});

module.exports = router;
