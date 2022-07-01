const date = new Date('2011-08-01T19:58:00.000Z');

module.exports = {
  up: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkInsert('Lists',
      [{
        id: 1,
        task_list: 'Task example 1',
        status: 'pendente',
        date: date,
      },
      {
        id: 2,
        task_list: 'Task example 3',
        status: 'em andamento',
        date: date,
      },
      {
        id: 3,
        task_list: 'Task example 3',
        status: 'pronto',
        date: date,
      },
      ], { timestamps: false });
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkDelete('Users', null, {});
  },
};
