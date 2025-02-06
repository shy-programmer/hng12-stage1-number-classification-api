const axios = require('axios');
const express = require('express');
const cors = require('cors');
const app = express()

app.use(cors());

const is_prime = (n) => {    
    let prime;
    if (n < 2) {
        prime = false;
        return prime;
    }
    else if (n == 2 || n == 3) {
        prime = true;
        return prime;
    }
    for (let i = 2; i < n; i++) {
        if (n % i == 0) {
            prime = false;
            return prime;
        }
    }
    prime = true;
    return prime;
}   


const is_perfect = (n) => {
    let sum = 0;
    for (let i = 1; i < n; i++) {
        if (n % i == 0) {
            sum += i;
        }
    }
    if (sum == n) {
        return true;
    }
    return false;
}

const is_armstrong = (n) => {    
       if (n < 1) {
        return false;
    }
    if (n < 10) {
        return true;
    }
    let num = n.toString();
    console.log(num);
    let pow = num.length;
    let sum = 0;
    for (let i = 0; i < pow; i++) {
        sum += Math.pow(parseInt(num[i]), pow);
    }
    console.log(sum);
    return sum == n;
}
console.log(is_armstrong(-371));

const is_odd = (n) => {
    return n % 2 != 0;
}

const is_even = (n) => {
    return n % 2 == 0;
}

const digit_sum = (n) => {  
    
    let num = Math.abs(n).toString().split('');
    let sum = num.reduce((a, b) => parseInt(a) + parseInt(b));
    return ParseInt(sum);
}

const props = (n) => {
    let prop = [];
    if (is_armstrong(n)) {
        prop.push('armstrong');
    }
    if (is_even(n)) {
        prop.push('even');
    }
    else {
        prop.push('odd');
    }
    return prop;
}

const response = (n) => {
    let res;
    if (!isNaN(n) && n % 1 == 0) {
        res = {
        number: parseInt(n),
        is_prime: is_prime(n),
        is_perfect: is_perfect(n),
        properties: props(n),
        digit_sum: digit_sum(n),
    }
}
    else { 
        res = {
        number: n,
        error: true
    }
}
return res;
}

module.exports = response;


