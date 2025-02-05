const props = require('./calcs');
const express = require('express');
const cors = require('cors');
const app = express()
const axios = require('axios');
const {urlencoded} = require('body-parser');
const port = 3000

app.use(cors());
app.use(urlencoded({extended: true}));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
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
        }
    
    res.status(200).json(result);
})
.post('/api/classify-number/', async (req, res) => {
    numInput = req.body.entry;
    let result;
    if (!isNaN(numInput) && numInput % 1 == 0) {
    const APIUrl = `http://numbersapi.com/${numInput}/math`
    const fact = await axios.get(APIUrl);
    const fun_fact = fact.data;
    result = props(numInput);
    result.fun_fact = fun_fact;}
    else {
        result = props(numInput);
         }
    
    res.status(200).json(result);
})


app.listen(port, () => {
  console.log(`server is listening...`)
});