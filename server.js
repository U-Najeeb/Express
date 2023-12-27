const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv').config;
const Tour = require("./models/toursModel");

const app = express();
dotenv({ path: `${__dirname}/config.env` });

  const DB = process.env.DATABASE.replace(
    '<PASSWORD>',
    process.env.DATABASE_PASSWORD
  );
  const main = async ()=>{
    try {
      await mongoose.connect(DB)
      console.log("Database is connected successfully")
    } catch (error) {
      console.log(error)
    }
  }

main()

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);  
});
