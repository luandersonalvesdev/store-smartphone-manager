/**
 *
 * @param {import('sequelize').Sequelize} sequelize
 * @param {import('sequelize').DataTypes} DataTypes
 */

module.exports = (sequelize, DataTypes) => {
  const ProductModel = sequelize.define(
    'Product',
    {
      id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
      name: { type: DataTypes.STRING },
      brand: { type: DataTypes.STRING },
      model: { type: DataTypes.STRING },
      price: { type: DataTypes.REAL },
      userId: { type: DataTypes.INTEGER, foreignKey: true },
    },
    {
      tableName: 'products',
      underscored: true,
      timestamps: false,
    },
  );

  ProductModel.associate = (models) => {
    ProductModel.belongsTo(
      models.User,
      {
        foreignKey: 'userId',
        as: 'user',
      },
    );
  };

  return ProductModel;
};
