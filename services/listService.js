const { List } = require('../models');

const getAll = async () => {
  // console.log(typeof List)
  const list = await List.findOne({ where: { id:1 }});
  // const list = 'qualuqer cisa'

  return list;
};

module.exports = {
  getAll,
}