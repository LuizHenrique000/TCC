const axios = require('axios');
const express = require('express');
const app = express();

app.get('/', (req, res) => {
  axios.get('http://localhost:8080/api/v1/horario')
    .then(response => {
      res.send(response.data);
    })
    .catch(error => {
      res.send(error);
    });
});

app.listen(3000, () => {
    console.log('Example app listening on port 3000!');
    });