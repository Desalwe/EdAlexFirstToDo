const Task = require("../models/Task");

function getAllTasks(req, res, next) {
  Task.getAll((err, results) => {
    if (err) {
      res.render("error: ", err);
    }
    req.tasks = results;
    next();
  });
}

module.exports = { getAllTasks };
