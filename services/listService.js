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

const updateTask = async (id, task, status) => {
  const updatedTask = await List.update(
    { task_list: task, status },
    { where: { id } },
  )

  return updatedTask;
}

module.exports = {
  getAll,
  createTask,
  updateTask,
  updateTask,
}