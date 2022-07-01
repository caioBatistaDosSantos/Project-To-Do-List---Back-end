const listService = require('../services/listService');

const getAll = async (_req, res) => {
  const list = await listService.getAll();

  return res.status(200).json(list);
}

const createTask = async (req, res) => {
  const { task, status } = req.body;

  const newTask = await listService.createTask(task, status);

  return res.status(201).json(newTask);
}

const updateTask = async (req, res) => {
  const { task, status } = req.body;
  const { id } = req.params;

  const updatedTask = await listService.updateTask(id, task, status)

  return res.status(200).json(updatedTask);
}

module.exports = {
  getAll,
  createTask,
}