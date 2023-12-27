const express = require('express');
const Tour = require("./models/toursModel");
const connectToMongoose = require('./config/connectToDb');

const app = express();

connectToMongoose()

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);  
});
