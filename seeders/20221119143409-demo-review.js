"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("Reviews", [
      {
        date: "2022-11-19 14:45:02",
        user_id: "1",
        event_id: "1",
        star: "5",
        review: "Bagus banget",
      },
      {
        date: "2022-11-19 14:45:02",
        user_id: "1",
        event_id: "2",
        star: "5",
        review: "Bagus banget",
      },
      {
        date: "2022-11-19 14:45:02",
        user_id: "1",
        event_id: "3",
        star: "4",
        review: "Bagus banget",
      },
      {
        date: "2022-11-19 14:45:02",
        user_id: "1",
        event_id: "4",
        star: "5",
        review: "Bagus banget",
      },
      {
        date: "2022-11-19 14:45:02",
        user_id: "1",
        event_id: "5",
        star: "5",
        review: "Bagus banget",
      },
      {
        date: "2022-11-19 14:45:02",
        user_id: "2",
        event_id: "6",
        star: "4",
        review: "Bagus banget",
      },
      {
        date: "2022-11-19 14:45:02",
        user_id: "2",
        event_id: "7",
        star: "3",
        review: "Bagus banget",
      },
      {
        date: "2022-11-19 14:45:02",
        user_id: "2",
        event_id: "8",
        star: "4",
        review: "Bagus banget",
      },
      {
        date: "2022-11-19 14:45:02",
        user_id: "2",
        event_id: "9",
        star: "5",
        review: "Bagus banget",
      },
      {
        date: "2022-11-19 14:45:02",
        user_id: "2",
        event_id: "10",
        star: "5",
        review: "Bagus banget",
      },
      {
        date: "2022-11-19 14:45:02",
        user_id: "3",
        event_id: "11",
        star: "5",
        review: "Bagus banget",
      },
      {
        date: "2022-11-19 14:45:02",
        user_id: "3",
        event_id: "12",
        star: "4",
        review: "Bagus banget",
      },
      {
        date: "2022-11-19 14:45:02",
        user_id: "3",
        event_id: "13",
        star: "5",
        review: "Bagus banget",
      },
      {
        date: "2022-11-19 14:45:02",
        user_id: "3",
        event_id: "14",
        star: "4",
        review: "Bagus banget",
      },
      {
        date: "2022-11-19 14:45:02",
        user_id: "3",
        event_id: "15",
        star: "4",
        review: "Bagus banget",
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
