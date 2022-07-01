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

  await listService.updateTask(id, task, status)

  return res.status(200).json({ message: 'Task successfully changed'});
}

const deleteTask = async (req, res) => {
  const { id } = req.params;

  await listService.deleteTask(id);

  return res.status(204).json({ message: 'Task deleted successfully'})
}

module.exports = {
  getAll,
  createTask,
  updateTask,
  deleteTask
}