const connection = require("../config/config");
const models = require("../models");
const { Event } = models;
const jwt = require("jsonwebtoken");

module.exports = {
  getAllEvent: async (req, res) => {
    const event = await Event.findAll();
    res.json({
      message: "success get data",
      data: event,
    });
  },

  getEventByID: async (req, res) => {
    const { id } = req.params;
    const events = await Event.findByPk(id);
    res.json({
      message: "success get data",
      data: events,
    });
  },

  addEvent: async (req, res) => {
    const { name, description, image, date, time, location, loc, loc_url, price } = req.body;
    const events = await Event.create({ name, description, image, date, time, location, loc, loc_url, price });

    res.status(200).json({
      message: "success insert data",
      data: events,
    });
  },

  deleteEventByID: async (req, res) => {
    const { id } = req.params;
    await Event.destroy({
      where: {
        id,
      },
    });

    res.status(200).json({
      message: "success delete data",
    });
  },

  updateEventByID: async (req, res) => {
    const { id } = req.params;
    const { name, description, image, date, time, location, loc, loc_url, price } = req.body;

    await Event.update(
      { name, description, image, date, time, location, loc, loc_url, price },
      {
        where: {
          id,
        },
      }
    );

    res.json({
      message: "success edit data",
    });
  },

  getAllReview: (req, res) => {
    const { id } = req.params;
    connection.query(`SELECT * FROM review where event_id=${id}`, function (err, results, fields) {
      res.json({
        message: "success get data",
        data: results,
      });
    });
  },

  getReviewByID: (req, res) => {
    const { id, review_id } = req.params;

    connection.query(`SELECT * FROM review where event_id = ${id} AND id=${review_id}`, function (err, results, fields) {
      res.json({
        message: "success get data",
        data: results,
      });
    });
  },

  addReview: (req, res) => {},

  deleteReviewByID: (req, res) => {},

  updateReviewByID: (req, res) => {},
};
