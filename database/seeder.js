const db = require('./index.js');
const dummy = require('./dummy.js');

db.sequelize.query('DROP DATABASE IF EXISTS reservations')
  .then(() => db.sequelize.query('CREATE DATABASE reservations;'))
  .then(() => db.sequelize.query('USE reservations;'))
  .then(() => db.sequelize.sync())
  .then(() => {
    let restaurants = dummy.randomRestaurantGenerator();
    return db.Restaurant.bulkCreate(restaurants);
  })
  .then(() => {
    let tables = dummy.randomTableGenerator();
    return db.Table.bulkCreate(tables);
  })
  .then(() => console.log('Seed data completed'))
  .catch((error) => console.log('Error creating tables', error));