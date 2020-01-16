var express = require("express");
var router = express.Router();

/* GET users listing. */
router.get("/", function(req, res, next) {
  res.send("test function");
});

/* GET sign-up. */
router.post("/signup", function(req, res, next) {
  res.send("you have signed up");
});

/* GET sign-in. */
router.post("/signin", function(req, res, next) {
  res.send("you have signed in successfully");
});

module.exports = router;
