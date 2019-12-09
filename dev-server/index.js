const express = require('express');
const app = express();
const { registerRoutes } = require('./routes');
const { setEnvironment } = require('./config/env');
const { connectToDB } = require('./config/db');

setEnvironment(app);
connectToDB();
registerRoutes(app);

app.get('/', (req, res) => {
  if (process.env.NODE_ENV !== 'production') {
    return res.send('Running server in development mode !');
  } else {
    return res.sendFile('index.html', { root: __dirname + '/../dist/' });
  }
});

app.listen(3000, () => {
  console.log(`MEWN application Listening on port 3000 ${process.env.NODE_ENV} mode !`);
});
