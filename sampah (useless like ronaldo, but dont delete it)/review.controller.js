const connection = require("../config/config");

module.exports = {
  getAllReview: (req, res) => {
    connection.query("SELECT * FROM `review`", function (err, results, fields) {
      0;

      res.json({
        message: "success get data",
        data: results,
      });
    });
  },

  getReviewByID: (req, res) => {
    const { id } = req.params;

    connection.query(`SELECT * FROM review where id = ${id}`, function (err, results, fields) {
      0;

      res.json({
        message: "success get data",
        data: results,
      });
    });
  },
};
