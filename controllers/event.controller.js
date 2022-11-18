const connection = require("../config/db");

module.exports = {
  getAllEvent: (req, res) => {
    connection.query("SELECT * FROM `event` WHERE date>NOW();", function (err, results, fields) {
      // console.log(results); // results contains rows returned by server
      // console.log(fields); // fields contains extra meta data about results, if available

      res.json({
        massage: "success get data",
        data: results,
      });
    });
  },

  getEventByID: (req, res) => {
    const { id } = req.params;

    connection.query(`SELECT * FROM event where id = ${id}`, function (err, results, fields) {
      // console.log(results); // results contains rows returned by server
      // console.log(fields); // fields contains extra meta data about results, if available

      res.json({
        massage: "success get data",
        data: results[0],
      });
    });
  },

  // add movie
  addEvent: (req, res) => {
    const data = req.body;
    movies.push(data);
    res.status(201);
    res.send({
      status: "success",
      message: "success add data",
      data: movies,
    });
  },
};
