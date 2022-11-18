const connection = require("../config/db");
const jwt = require("jsonwebtoken");

module.exports = {
  getAllFavorite: (req, res) => {
    const auth = req.headers.authorization;
    const token = auth.split(" ")[1];
    const isTokenValid = jwt.verify(token, "marselinus");
    console.log(isTokenValid);

    connection.query("SELECT * FROM `favorite`", function (err, results, fields) {
      // console.log(results); // results contains rows returned by server
      // console.log(fields); // fields contains extra meta data about results, if available

      res.json({
        massage: "success get data",
        data: results,
      });
    });
  },

  getFavoriteByID: (req, res) => {
    const { id } = req.params;

    connection.query(`SELECT * FROM favorite where id = ${id}`, function (err, results, fields) {
      // console.log(results); // results contains rows returned by server
      // console.log(fields); // fields contains extra meta data about results, if available

      res.json({
        massage: "success get data",
        data: results[0],
      });
    });
  },
};
