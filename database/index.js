const Sequelize = require('sequelize');

const sequelize = new Sequelize('reservations', 'root', '', {
  host: 'localhost',
  dialect: 'mysql',
  port: 3000
});

const Restaurant = sequelize.define('restaurant', {
  id: {type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true},
  name: Sequelize.STRING,
  minParty: Sequelize.INTEGER,
  maxParty: Sequelize.INTEGER,
  open: Sequelize.TIME,
  close: Sequelize.TIME
});

const Table = sequelize.define('tabe', {
  id: {type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true},
  restaurantId: {
    type: Sequelize.INTEGER,
    references: {
      model: Restaurant,
      key: 'id'
    },
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