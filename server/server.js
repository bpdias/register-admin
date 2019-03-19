const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const dataset = require('./routes/api/dataset');
const app = express();

app.use(cors())

// Body Parser middleware
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

// DB Config
const db = require('./config/keys').mongoURI;

// Connerc to MongoDB
mongoose.connect(db)
    .then(() => console.log('MongoDB connected'))
    .then(err => console.log(err));

app.get('/', (req, res) => res.send('Hello world'));

// Use Routes
app.use('/api/dataset', dataset);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on port ${port}`))