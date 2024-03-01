/**
 *
 * @param {import('sequelize').Sequelize} sequelize
 * @param {import('sequelize').DataTypes} DataTypes
 */

module.exports = (sequelize, DataTypes) => {
  const UserModel = sequelize.define(
    'User',
    {
      id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
      username: { type: DataTypes.STRING },
      password: { type: DataTypes.STRING },
    },
    {
      tableName: 'users',
      underscored: true,
      timestamps: false,
    },
  );

  UserModel.associate = (models) => {
    UserModel.hasMany(
      models.Product,
      {
        foreignKey: 'id',
        as: 'products',
      },
    );
  };

  return UserModel;
};
