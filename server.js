const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv').config;
const Tour = require("./models/toursModel");
const {ApolloServer} = require("@apollo/server")
const  { startStandaloneServer } = require('@apollo/server/standalone');
const typeDefs = require("./schemas/typeDefs")
const resolvers = require("./schemas/resolvers")

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

      // const testTour = await Tour.create({
      //   name : "Forest Hiker",
      //   rating : 5.0,  
      //   price : 497
      // })
      // console.log("Tour Created", testTour)
    } catch (error) {
      console.log(error)
    }
  }

main()

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);  
});

// const server = new ApolloServer({
//   typeDefs,
//   resolvers
// })

// const { url } = startStandaloneServer(server, {
//   listen: { port: 4000 },
// });