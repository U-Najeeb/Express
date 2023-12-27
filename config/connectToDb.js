const mongoose = require('mongoose');
const dotenv = require('dotenv').config;
dotenv({ path: `./config.env` });

const DB = process.env.DATABASE.replace(
  '<PASSWORD>',
  process.env.DATABASE_PASSWORD
);
const connectToMongoose = async () => {
  try {
    await mongoose.connect(DB);
    console.log('Database is connected successfully');
  } catch (error) {
    console.log("Connecttion Failed");
  }
};

module.exports = connectToMongoose