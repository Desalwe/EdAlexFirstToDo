const express = require("express");
const router = express.Router();
const { showAllTasks } = require("../controllers/task-controller");

/* GET home page. */
router.get(showAllTasks);

module.exports = router;
