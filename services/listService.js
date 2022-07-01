const { List } = require('../models');

const getAll = async () => {
  const list = await List.findAll();

  return list;
};

module.exports = {
  getAll,
}