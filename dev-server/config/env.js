const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const bodyParser = require('body-parser');

function setDevEnv (app) {
  process.env.NODE_ENV = 'development';
  process.env.DB_URL = 'mongodb://localhost:27017/vue-db';
  app.use(bodyParser.json());
  app.use(morgan('dev'));
  app.use(cors());

};

function setProdDev (app) {
  process.env.DB_URL = 'mongodb://localhost:27017/prod-db';
  app.use(bodyParser.json());
  app.use(express.static(__dirname + '/../dist'));
};

const setEnvironment = function (app) {
  if (process.env.NODE_ENV !== 'production') {
    setDevEnv(app);
  } else {
    setProdDev(app);
  }
};

exports.setEnvironment = setEnvironment;
