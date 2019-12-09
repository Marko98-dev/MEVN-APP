const User = require('../../model/user-model');
const Task = require('../../model/task-model');
const moment = require('moment');

const index = function (req, res) {
  // Find all tasks
  Task.find({}, (error, tasks) => {
    if (error && !tasks) {
      res.status(500).json();
    };
    res.status(200).json({ tasks: tasks });
  }).populate('author', 'username', 'user');
};

const create = function (req, res) {
  // Create task
  const id = 10; // fake id for now
  User.findOne({ _id: id }, (error, user) => {
    if (error && !user) {
      return res.status(500).json();
    };
    const task = new Task(req.body.task);
    task.author = user._id;
    task.dueDate = moment(task.dueDate);

    task.save(error => {
      if (error) {
        return res.status(500).json();
      };
      return res.status(204).json();
    });
  });
};

const update = function (req, res) {
  // Update task
  const id = 10; // fake id for now
  User.findOne({ _id: id }, (error, user) => {
    if (error) {
      res.status(500).json();
    } else if (!user) {
      return res.status(404).json();
    };

    const task = req.body.task; // task that user want's to update !
    task.author = user._id;
    task.dueDate = moment(task.dueDate);
    Task.findByIdAndUpdate({ _id: task._id }, (error, task) => {
      if (error) {
        return res.status(500).json();
      };
      return res.status(204).json();
    });
  });
};

const remove = function (req, res) {
  // Delete task
  id = 10; // fake id for now
  Task.findOne({ _id: req.params.id }, (error, task) => {
    if (error) {
      res.status(500).json();
    } else if (!task) {
      res.status(404).json();    
    };
    if (task.author._id.toString() !== id) {
      return res.status(403).json({ message: 'Not allowed to delete another users tasks' });
    };
    Task.deleteOne({ _id: req.params.id }, error => {
      if (error) {
        return res.status(500).json();
      };
      return res.status(204).json();
    });
  });
  return res.status(204).json();
}

const show = function (req, res) {
  // get task by id
  Task.findOne({ _id: req.params.id }, (error, task) => {
    if (error) {
      return res.status(500).json();
    } else if (!task) {
      return res.status(404).json();
    };
    return res.status(200).json({ task: task });
  });
}

exports.show = show;
exports.remove = remove;
exports.update = update;
exports.create = create;
exports.index = index;
