const express = require("express");

const router = express.Router();

router.post("/perfect-money-status", (req, res) => {
  console.log("response => ", res);
  return res.send(res);
});



module.exports = router;
