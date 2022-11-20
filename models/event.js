'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Event extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Event.init({
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    image: DataTypes.STRING,
    date: DataTypes.DATEONLY,
    time: DataTypes.STRING,
    location: DataTypes.STRING,
    loc_url: DataTypes.STRING,
    price: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Event',
  });
  return Event;
};