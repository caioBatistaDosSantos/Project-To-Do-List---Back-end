const listService = require('../services/listService');

const getAll = async (_req, res) => {
  const list = await listService.getAll();

  return res.status(200).json(list);
}

module.exports = {
  getAll,
}