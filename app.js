const express = require('express');
const fs = require('fs');
const app = express();
const tourRouter = require("./routes/tourRoutes")
app.use(express.json());

// const users = JSON.parse(
//   fs.readFileSync(`${__dirname}/dev-data/data/users.json`)
// );

//ROUTES
app.use("/api/v1/tours",tourRouter)


const PORT = 3000;
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
