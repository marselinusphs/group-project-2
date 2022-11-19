const connection = require("../config/config");
const models = require("../models");
const { Event, Review } = models;
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

  getAllReview: async (req, res) => {
    const { id } = req.params;
    const reviews = await Review.findAll({
      where: {
        event_id: id,
      },
    });

    res.json({
      message: "success get data",
      data: reviews,
    });
  },

  getReviewByID: async (req, res) => {
    const { id, review_id } = req.params;
    const reviews = await Review.findAll({
      where: {
        event_id: id,
        id: review_id,
      },
    });

    res.json({
      message: "success get data",
      data: reviews,
    });
  },

  addReview: async (req, res) => {
    const { user_id, star, review } = req.body;
    const { id } = req.params;

    const reviews = await Review.create({ event_id: id, user_id, star, review });

    res.status(200).json({
      message: "success insert data",
      data: reviews,
    });
  },

  deleteReviewByID: async (req, res) => {
    const { id, review_id } = req.params;

    await Review.destroy({
      where: {
        id: review_id,
        event_id: id,
      },
    });

    res.status(200).json({
      message: "success delete data",
    });
  },

  updateReviewByID: async (req, res) => {
    const { star, review } = req.body;
    const { id, review_id } = req.params;

    const reviews = await Review.update(
      { star, review },
      {
        where: {
          event_id: id,
          id: review_id,
        },
      }
    );

    res.status(200).json({
      message: "success edit data",
    });
  },
};
