module.exports = (sequelize, DataTypes) => {
  const List = sequelize.define('List', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    task_list: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    status: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    date: {
      type: DataTypes.DATE,
      allowNull: false,
    },
  }, {
    timestamps: false,
    tableName: 'Lists',
  });

  return List;
};
