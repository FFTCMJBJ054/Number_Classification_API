const express = require ('express');
const axios = require ('axios');

const app = express();
const PORT = 3000;


//to check for digit sum
function digitSum(num){
    let sum = 0;
    num.toString().split('').forEach(digit => {
        sum+=parseInt(digit)
    });
    return sum;
}

//to check if number is armstrong
function isArmstrong(num){
    const digits = num.toString().split('');
    const length = digits.length;
    const sum = digits.reduce((acc, digit) => acc + Math.pow(Number(digit), length), 0);
    return sum === num;
}

//to check if number is even or odd 
function isEvenOrOdd(num){
    return num % 2 === 0? 'even' : 'odd';
}

// Function to check if a number is prime
function isPrime(num) {
    if (num <= 1) return false;
    if (num <= 3) return true;
    if (num % 2 === 0 || num % 3 === 0) return false;
    for (let i = 5; i * i <= num; i += 6) {
        if (num % i === 0 || num % (i + 2) === 0) return false;
    }
    return true;
}

//to check if number is perfect
function isPerfectNumber(num) {
    if (num <= 0) return false; // A perfect number must be positive.

    let sum = 0;
    for (let i = 1; i <= Math.floor(num / 2); i++) {
        if (num % i === 0) {
            sum += i; // Add the divisor to the sum.
        }
    }

    return sum === num; // Check if the sum of divisors equals the number.
}


// API endpoint
app.get('/api/classify-number', async (req, res) => {
    const num = parseInt(req.query.number);

    if (isNaN(num)) {
        return res.status(400).json({number: 'Alphabet', error: true});
    }

    try {
        // Fetch fun fact from Numbers API
        const response = await axios.get(`http://numbersapi.com/${num}/math`);
        const funFact = response.data;

        // Determine properties
        const armstrongNum = isArmstrong(num);
        const evenOrOdd = isEvenOrOdd(num);

        const properties = [];
        if (armstrongNum) properties.push('armstrong');
        properties.push(evenOrOdd);

        // Return response
        res.json({
            number: num,
            is_prime: isPrime(num),
            is_perfect: isPerfectNumber(num),
            properties: properties,
            digit_sum: digitSum(num),
            fun_fact: funFact,
        });
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch fun fact from Numbers API' });
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`Successfully started server on port ${PORT}.`);
});
