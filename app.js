const props = require('./calcs');
const express = require('express');
const cors = require('cors');
const app = express()
const axios = require('axios');
const port = 3000

app.use(cors());

app.get('/', (req, res) => {
    res.json({message: 'Welcome to my HNG task 1 submission. To get fun facts and details about any number add /api/classify-number/ to the url and add the number you want to classify as a query parameter. E.g. /api/classify-number/?number=371'})
})

app.get('/api/classify-number/', async (req, res) => {
    numInput = req.query.number;
    let result;
    if (!isNaN(numInput) && numInput % 1 == 0) {
        const APIUrl = `http://numbersapi.com/${numInput}/math`
    const fact = await axios.get(APIUrl);
    const fun_fact = fact.data;
    result = props(numInput);
    result.fun_fact = fun_fact;}
    else {
        result = props(numInput);
        console.log('here')
    }
    
    res.status(200).json(result);
})


app.listen(port, () => {
  console.log(`server is listening...`)
});