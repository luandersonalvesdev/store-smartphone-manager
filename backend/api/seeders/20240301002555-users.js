const hashedPass = '$2y$11$61LX0oQOXB8J5umGaDqifu68EbUHDdZBLjNh8VSdIvF.tzoaeA8aa'; // 12345

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert(
      'users',
      [
        {
          id: 1,
          username: 'Jorel',
          password: hashedPass,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 2,
          username: 'Lara',
          password: hashedPass,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
    );
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('users', null, {});
  },
};
