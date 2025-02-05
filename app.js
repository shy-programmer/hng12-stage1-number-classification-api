const props = require('./calcs');
const express = require('express');
const cors = require('cors');
const app = express()
const axios = require('axios');
const port = 3000

app.use(cors());

app.get('/api/classify-number/', async (req, res) => {
    numInput = req.query.number;
    const APIUrl = `http://numbersapi.com/${numInput}`
    const fact = await axios.get(APIUrl);
    const fun_fact = fact.data;
    const result = props(numInput);
    result.fun_fact = fun_fact;


    res.json(result);
})


app.listen(port, () => {
  console.log(`server is listening...`)
});