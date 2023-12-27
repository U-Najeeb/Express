const express = require('express');
const tourRouter = require("./routes/tourRoutes")
const connectToMongoose = require('./config/connectToDb');
connectToMongoose()
const app = express();
app.use(express.json())
app.use("/api/v1/tours", tourRouter)


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);  
});
