// src/graphql/resolvers.js
const Tour = require('../models/toursModel');
const mongoose = require("mongoose")
const resolvers = {
  Query: {
    getTours: async () => {
      try {
        const tours = await Tour.find();
        return tours;
      } catch (error) {
        console.error(error);
        throw error;
      }
    },
  },
  Mutation : {
    addTour : async (_,{tour})=>{
        try {
            console.log(tour)
      const testTour = await Tour.create({
        name : tour.name,
        rating : tour.rating,  
        price : tour.price
      })
      console.log("Tour Created", testTour)
      return testTour
        } catch (error) {
            console.log(error)
        }
    }
  }
};

module.exports = resolvers;
