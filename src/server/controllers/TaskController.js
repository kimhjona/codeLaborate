const Tasks = require('./../models/TaskModel');

const TaskController = {
  create(req, res) {
    Tasks.create({
      taskName: req.body.task,
      status: req.body.status,
      owner: req.body.owner,
      content: req.body.content,
    }).then((task) => {
      res.status(200).json('New task created: ', task);
    });
  },

  update(req, res) {
    Tasks.findOne({
      taskName: req.body.task,
    }).then((task) => {
      task.update({
        // will the req body have updated info?
        // or just snippet to add to existing info?
        taskName: req.body.task,
        status: req.body.status,
        owner: req.body.owner,
        content: req.body.content,
      }).then((task2) => {
        res.status(200).json(`${task2.taskName} task updated: ${task2}`);
      });
    });
  },

  delete(req, res) {
    Tasks.findOne({
      taskName: req.body.task,
    }).then((task) => {
      task.destroy().then(() => {
        res.status(200).json('Task deleted');
      });
    });
  },
};

module.exports = TaskController;
