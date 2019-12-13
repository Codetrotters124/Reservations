const model = require('./model');

const bookings = {
  get: (req, res) => {
    // console.log(req.params.id);
    model.bookings.get(req.params.id, (err, data) => {
      if (err) {
        res.status(400).send('sorry');
      } else {
        res.status(200).send(data);
      }
    });
  },
  post: (req, res) => {

  }
};

module.exports = {bookings};