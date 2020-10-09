const express = require('express');
const bodyParser = require('body-parser');
const PORT = 5000;

let app = express();

app.use(express.static('server/public'));
app.use(bodyParser.urlencoded({ extended: true}));

app.post('/calculate', (req, res) => {
    console.log('in POST /calculate', req.body);

    doMath(req.body);    

    res.sendStatus(201); // Created
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