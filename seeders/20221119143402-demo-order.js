"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("Orders", [
      {
        user_id: "1",
        datetime: "2022-11-19 14:50:05",
        event_id: "1",
        qty: "1",
        total_price: "50000",
      },
      {
        user_id: "1",
        datetime: "2022-11-19 14:50:05",
        event_id: "2",
        qty: "1",
        total_price: "15000",
      },
      {
        user_id: "1",
        datetime: "2022-11-19 14:50:05",
        event_id: "3",
        qty: "1",
        total_price: "50000",
      },
      {
        user_id: "1",
        datetime: "2022-11-19 14:50:05",
        event_id: "4",
        qty: "1",
        total_price: "0",
      },
      {
        user_id: "1",
        datetime: "2022-11-19 14:50:05",
        event_id: "5",
        qty: "1",
        total_price: "50000",
      },
      {
        user_id: "2",
        datetime: "2022-11-19 14:50:05",
        event_id: "6",
        qty: "1",
        total_price: "185000",
      },
      {
        user_id: "2",
        datetime: "2022-11-19 14:50:05",
        event_id: "7",
        qty: "1",
        total_price: "0",
      },
      {
        user_id: "2",
        datetime: "2022-11-19 14:50:05",
        event_id: "8",
        qty: "1",
        total_price: "0",
      },
      {
        user_id: "2",
        datetime: "2022-11-19 14:50:05",
        event_id: "9",
        qty: "1",
        total_price: "50000",
      },
      {
        user_id: "2",
        datetime: "2022-11-19 14:50:05",
        event_id: "10",
        qty: "1",
        total_price: "0",
      },
      {
        user_id: "3",
        datetime: "2022-11-19 14:50:05",
        event_id: "11",
        qty: "1",
        total_price: "150000",
      },
      {
        user_id: "3",
        datetime: "2022-11-19 14:50:05",
        event_id: "12",
        qty: "1",
        total_price: "150000",
      },
      {
        user_id: "3",
        datetime: "2022-11-19 14:50:05",
        event_id: "13",
        qty: "1",
        total_price: "45000",
      },
      {
        user_id: "3",
        datetime: "2022-11-19 14:50:05",
        event_id: "14",
        qty: "1",
        total_price: "350000",
      },
      {
        user_id: "3",
        datetime: "2022-11-19 14:50:05",
        event_id: "15",
        qty: "1",
        total_price: "0",
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
