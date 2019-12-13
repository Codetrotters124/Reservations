const db = require('../database/index');

const bookings = {
  get: (id, callback) => {
    // restaurants.name FROM tables, restaurants
    console.log(id);
    let query = `SELECT * FROM restaurants, tables WHERE tables.restaurantId = restaurants.id AND tables.restaurantId = ${id}`;

    db.sequelize.query(query, { type: db.sequelize.QueryTypes.SELECT}).then(tables => {
      callback(null, tables);
    }).catch(err => {
      callback(err, null);
    });
  },
  post: callback => {

  }
};

module.exports = {bookings};
