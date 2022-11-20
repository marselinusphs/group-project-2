"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("Favorites", [
      {
        user_id: "1",
        event_id: "1",
      },
      {
        user_id: "1",
        event_id: "2",
      },
      {
        user_id: "1",
        event_id: "3",
      },
      {
        user_id: "2",
        event_id: "4",
      },
      {
        user_id: "2",
        event_id: "5",
      },
      {
        user_id: "2",
        event_id: "6",
      },
      {
        user_id: "3",
        event_id: "7",
      },
      {
        user_id: "3",
        event_id: "8",
      },
      {
        user_id: "3",
        event_id: "9",
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
