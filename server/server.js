const express = require('express');
const bodyParser = require('body-parser');
const PORT = 5000;

let app = express();

app.use(express.static('server/public'));
app.use(bodyParser.urlencoded({ extended: true}));

app.post('/calculate', (req, res) => {
    console.log('in POST /calculate', req.body);
    // Is this working?
    res.sendStatus(200); // Created
});






///
app.listen(PORT, ()=> {
    console.log(`running on port: ${PORT}`);
});