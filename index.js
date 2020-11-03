const express = require('express');
const app = express();
const morgan = require('morgan');
const mongoose = require('mongoose');

require('dotenv').config();

const suggestRoutes = require('./routes/suggestionRoutes');

mongoose
    .connect(process.env.MONGODB_URI, {
        useNewUrlParser:true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false
    })
    .then(() => console.log('MongoDB Connected'))
    .catch((err) => console.log(`MongoDB Error: ${err}`));

const port = process.env.PORT || 3000;

app.use(morgan('dev'));

app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use('/api/v1/suggestions', suggestRoutes);

app.listen(port, () => {
    console.log(`listening on PORT ${port}`);
});