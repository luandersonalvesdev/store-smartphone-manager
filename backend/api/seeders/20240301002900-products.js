/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert(
      'products',
      [
        {
          id: 1,
          name: 'Xiaomi Redmi 9',
          brand: 'Xiaomi',
          model: 'Redmi 9',
          price: 10000,
          color: 'Red',
          user_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 2,
          name: 'Iphone 14 Pro',
          brand: 'Iphone',
          model: '14 Pro',
          price: 30000,
          color: 'silver',
          user_id: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
    );
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('products', null, {});
  },
};
