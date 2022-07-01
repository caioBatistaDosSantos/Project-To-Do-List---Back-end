const { List } = require('../models');

const getAll = async () => {
  const list = await List.findAll();

  return list;
};

const createTask = async (task, status) => {
  const date = new Date();

  const newTask = await List.create({ task_list: task, status, date })

  return newTask;
}

module.exports = {
  getAll,
  createTask,
}