const express = require('express');
const cors = require('cors');
require('dotenv').config();
require('./db/connectdb.js');
const bodyParser = require('body-parser');

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
const authRoutes = require('./routes/auth.js');

app.use('/auth', authRoutes);

const port = process.env.PORT || 5000;

app.listen(port, (req, res) => {
    console.log(`Server is running on port ${port}`);
});