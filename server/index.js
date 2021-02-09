const express = require('express');
const axios = require('axios');
const bodyParser = require('body-parser');
const pino = require('express-pino-logger')();

const app = express();
app.use(bodyParser.json());
app.use(pino);

app.post('/api/users', (req, res) => {
  const { body } = req;
  console.log(body);
  axios.post('http://localhost:3005/users', body)
    .then((response) => {
      console.log(`response ${response.body}`);
      res.send('OK');
    })
    .catch((err) => {
      console.log(`err ${err}`);
    });
});

app.listen(3001, () => console.log('Express server is running on localhost:3001'));
