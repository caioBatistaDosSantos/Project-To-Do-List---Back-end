const { List } = require('../models');

const getAll = async () => {
  const list = await List.findAll();

  return list;
};

const createTask = async (task, status) => {
  const date = new Date();

  const newTask = await List.create({ task_list: task, status, date });

  return newTask;
};

const updateTask = async (id, task, status) => {
  await List.update(
    { task_list: task, status },
    { where: { id } },
  );
};

const deleteTask = async (id) => {
  await List.destroy(
    { where: { id } },
  );
};

module.exports = {
  getAll,
  createTask,
  updateTask,
  deleteTask,
};
