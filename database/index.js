const Sequelize = require('sequelize');

const sequelize = new Sequelize('reservations', 'root', '', {
  dialect: 'mysql'
});

const Restaurant = sequelize.define('restaurant', {
  id: {type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true},
  name: Sequelize.STRING,
  minParty: Sequelize.INTEGER,
  maxParty: Sequelize.INTEGER,
  open: Sequelize.TIME,
  close: Sequelize.TIME
});

const Table = sequelize.define('table', {
  uuid: {type: Sequelize.INTEGER},
  restaurantId: {
    type: Sequelize.INTEGER,
  },
  date: Sequelize.DATEONLY,
  time: Sequelize.TIME,
  size: Sequelize.INTEGER
});

// sequelize
//   .authenticate()
//   .then(() => {
//     console.log('connection established');
//   })
//   .catch(err => {
//     console.error('Unable to connect to the database: ', err);
//   });

module.exports = {
  sequelize,
  Restaurant,
  Table
};