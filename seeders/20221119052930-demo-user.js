"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("Users", [
      {
        name: "Aldi",
        email: "aldi@gmail.com",
        password: "aldi123",
        role_id: "1",
      },
      {
        name: "Budi",
        email: "budi@gmail.com",
        password: "budi123",
        role_id: "1",
      },
      {
        name: "Caca",
        email: "caca@gmail.com",
        password: "caca123",
        role_id: "1",
      },
      {
        name: "Marselinus",
        email: "marselinusphs@gmail.com",
        password: "marselinus123",
        role_id: "2",
      },
      {
        name: "Rovinda",
        email: "rovinda@gmail.com",
        password: "rovinda123",
        role_id: "2",
      },
      {
        name: "Nola",
        email: "nola@gmail.com",
        password: "nola123",
        role_id: "2",
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
