const listService = require('../services/listService');

const getAll = async (_req, res) => {
  const list = await listService.getAll();

  return res.status(200).json(list);
}

const createTask = async (req, res) => {
  const { task, status } = req.body;

  const newTask = listService.createTask(task, status);

  return res.status(204).json(newTask);
}

module.exports = {
  getAll,
  createTask,
}