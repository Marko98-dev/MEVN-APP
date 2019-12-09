const mongoose = require('mongoose');

const connectToDB = function () {
  mongoose.connect(process.env.DB_URL, { useNewUrlParser: true, useUnifiedTopology: true }, error => {
    if (error) {
      console.log('Can\'t connect');
      throw error;
    } else {
      console.log('Connected to MongoDB !');
    }
  });
};

exports.connectToDB = connectToDB;
