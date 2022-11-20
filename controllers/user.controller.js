const connection = require("../config/config");
const models = require("../models");
const { User, Order, Favorite, Event, Role } = models;
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

module.exports = {
  getAllUser: async (req, res) => {
    const users = await User.findAll();
    res.json({
      message: "success get data",
      data: users,
    });
  },

  getUserByID: async (req, res) => {
    const { id } = req.params;
    const users = await User.findByPk(id);
    res.json({
      message: "success get data",
      data: users,
    });
  },

  addUser: async (req, res) => {
    const saltRounds = 10;
    const { name, email, password } = req.body;
    const hashedPassword = bcrypt.hashSync(password, saltRounds);
    const user = await User.create({ name, email, password: hashedPassword });

    res.status(200).json({
      message: "success insert data",
      data: user,
    });
  },

  deleteUserByID: async (req, res) => {
    const { id } = req.params;
    await User.destroy({
      where: {
        id,
      },
    });

    res.status(200).json({
      message: "success delete data",
    });
  },

  updateUserByID: async (req, res) => {
    const { id } = req.params;
    const { name, email, password, role_id } = req.body;

    await User.update(
      { name, email, password, role_id },
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

  getAllOrder: async (req, res) => {
    const { id } = req.params;
    const orders = await Order.findAll({
      where: {
        user_id: id,
      },
    });

    res.json({
      message: "success get data",
      data: orders,
    });
  },

  getOrderByID: async (req, res) => {
    const { id, order_id } = req.params;
    const orders = await Order.findAll({
      where: {
        user_id: id,
        id: order_id,
      },
    });

    res.json({
      message: "success get data",
      data: orders,
    });
  },

  addOrder: async (req, res) => {
    const { event_id, qty } = req.body;
    const { id } = req.params;
    const events = await Event.findByPk(event_id);

    const { price } = events;
    const total_price = price * qty;

    const orders = await Order.create({ user_id: id, event_id, qty, total_price });

    res.status(200).json({
      message: "success insert data",
      data: orders,
    });
  },

  deleteOrderByID: async (req, res) => {
    const { id, order_id } = req.params;

    await Order.destroy({
      where: {
        id: order_id,
        user_id: id,
      },
    });

    res.status(200).json({
      message: "success delete data",
    });
  },

  updateOrderByID: async (req, res) => {
    const { event_id, qty } = req.body;
    const { id, order_id } = req.params;
    const events = await Event.findByPk(event_id);

    const { price } = events;

    const total_price = price * qty;

    const orders = await Order.update(
      { user_id: id, event_id, qty, total_price },
      {
        where: {
          user_id: id,
          id: order_id,
        },
      }
    );

    res.status(200).json({
      message: "success edit data",
    });
  },

  getAllFavorite: async (req, res) => {
    const { id } = req.params;
    const favorite = await Favorite.findAll({
      where: {
        user_id: id,
      },
    });

    res.json({
      message: "success get data",
      data: favorite,
    });
  },

  getFavoriteByID: async (req, res) => {
    const { id, favorite_id } = req.params;
    const favorites = await Favorite.findAll({
      where: {
        user_id: id,
        id: favorite_id,
      },
    });

    res.json({
      message: "success get data",
      data: favorites,
    });
  },

  addFavorite: async (req, res) => {
    const { event_id } = req.body;
    const { id } = req.params;

    const favorites = await Favorite.create({ user_id: id, event_id });

    res.status(200).json({
      message: "success insert data",
      data: favorites,
    });
  },

  deleteFavoriteByID: async (req, res) => {
    const { id, favorite_id } = req.params;

    await Favorite.destroy({
      where: {
        id: favorite_id,
        user_id: id,
      },
    });

    res.status(200).json({
      message: "success delete data",
    });
  },

  updateFavoriteByID: (req, res) => {},
};
