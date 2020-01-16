const connection = require("../db/config");

class Task {
  constructor() {}
}

Task.getAll = function getTasksFromDb(callback) {
  connection.query("SELECT * FROM tasks", (err, results) => {
    callback(err, results);
  });
};

module.exports = Task;
