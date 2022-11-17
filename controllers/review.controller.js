const connection = require("../config/db");

module.exports = {
  getAllReview: (req, res) => {
    connection.query("SELECT * FROM `review`", function (err, results, fields) {
      // console.log(results); // results contains rows returned by server
      // console.log(fields); // fields contains extra meta data about results, if available

      res.json({
        massage: "success get data",
        data: results,
      });
    });
  },

  getReviewByID: (req, res) => {
    const { id } = req.params;

    connection.query(`SELECT * FROM review where id = ${id}`, function (err, results, fields) {
      // console.log(results); // results contains rows returned by server
      // console.log(fields); // fields contains extra meta data about results, if available

      res.json({
        massage: "success get data",
        data: results[0],
      });
    });
  },
};
