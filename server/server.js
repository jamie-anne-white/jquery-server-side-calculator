const express = require('express');
const bodyParser = require('body-parser');
const PORT = 5000;

let app = express();

app.use(express.static('server/public'));
app.use(bodyParser.urlencoded({ extended: true}));








///
app.listen(PORT, ()=> {
    console.log(`running on port: ${PORT}`);
});