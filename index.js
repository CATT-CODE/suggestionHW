const express = require('express');
const app = express();
const morgan = require('morgan');
const mongoose = require('mongoose');

require('dotenv').config();

mongoose
    .connect('mongodb://localhost/suggestion', {
        useNewUrlParser:true,
        useUnifiedTopology: true,
        useCreateIndex: true
    })
    .then(() => console.log('MongoDB Connected'))
    .catch((err) => console.log(`MongoDB Error: ${err}`));

const port = process.env.PORT || 3000;

app.use(morgan('dev'));

app.get('/', (req, res) => {
    res.send('My Server Is Working');
});

app.listen(port, () => {
    console.log(`listening on PORT ${port}`);
});