const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const items = require('./routes/api/items');

const app = express();

//bodyparser Middleware
app.use(bodyParser.json());

//db Config 
const db = require('./config/keys').mongoURI;

//Connect to mongoku
mongoose
 .connect(db, { useUnifiedTopology: true, useNewUrlParser: true })
 .then(() => console.log('MongoDB Connected..'))
 .catch(err => console.log('[Error]: ' + err));

 app.use('/api/items', items);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server connected on port ${port}`));
