const express = require('express');
const bodyParser = require('body-parser');
const PORT = 5000;

let app = express();


// static files
app.use(express.static('server/public'));
app.use(bodyParser.urlencoded({ extended: true}));

let history = [];

app.get('/history', (req, res) => {
    console.log('in GET /history');

    res.send(history);
});


app.post('/calculate', (req, res) => {
    console.log('in POST /calculate', req.body);

    doMath(req.body);    

    res.sendStatus(201);
});

app.post('/calculate', (req, res) => {
    console.log('in POST /calculate', req.body);

    doMath(req.body);    

    res.sendStatus(201);
});
function doMath(calculationItem) {
   
    let mathResult;

    if(calculationItem.operator === '+') {
        mathResult = adding(calculationItem.numberOne, calculationItem.numberTwo);
    } else if(calculationItem.operator === '-') {
        mathResult = subtracting(calculationItem.numberOne, calculationItem.numberTwo);
    } else if(calculationItem.operator === 'x') {
        mathResult = multiplying(calculationItem.numberOne, calculationItem.numberTwo);
    } else if(calculationItem.operator === '/') {
        mathResult = dividing(calculationItem.numberOne, calculationItem.numberTwo);
    }

    calculationItem.result = mathResult;

    history.unshift(calculationItem);

    console.log('current history: ', history);
    
}

// actual math functions
function adding(num1, num2) {
    return parseInt(num1) + parseInt(num2);
}

function subtracting(num1, num2) {
    return parseInt(num1) - parseInt(num2);
}

function multiplying(num1, num2) {
    return parseInt(num1) * parseInt(num2);
}

function dividing(num1, num2) {
    return parseInt(num1) / parseInt(num2);
}






///
app.listen(PORT, ()=> {
    console.log(`running on port: ${PORT}`);
});