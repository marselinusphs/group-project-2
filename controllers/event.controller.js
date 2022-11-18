const connection = require("../config/config");

module.exports = {
  getAllEvent: (req, res) => {
    connection.query("SELECT * FROM `event` WHERE date>NOW();", function (err, results, fields) {
      res.json({
        message: "success get data",
        data: results,
      });
    });
  },

  getEventByID: (req, res) => {
    const { id } = req.params;

    connection.query(`SELECT * FROM event where id = ${id}`, function (err, results, fields) {
      res.json({
        message: "success get data",
        data: results,
      });
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
};
