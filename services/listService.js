const { List } = require('../models');

const getAll = async () => {
  const list = await List.findAll();

  return list;
};

const createList = async (task, status) => {
  const date = new Date();
  console.log(date)
  const newTask = await List.create(task, status, date)
  console.log(newTask)
  return newTask;
}

module.exports = {
  getAll,
  createList,
}