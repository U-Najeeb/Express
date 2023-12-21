const express = require('express');
const fs = require('fs');
const bodyParser = require("body-parser")
const app = express();

app.use(express.json())
const tours = JSON.parse(
  fs.readFileSync(`${__dirname}/dev-data/data/tours-simple.json`)
);
app.get('/api/v1/tours', (req, res) => {
  res.status(200).json({
    status: 'sucesss',
    results: tours.length,
    tours,
  });
});
app.post('/api/v1/tours', (req, res)=>{
    const newId = tours.at(tours.length-1).id + 1
    const newTour = Object.assign({id : newId}, req.body)
    tours.push(newTour)
    console.log(tours)
    fs.writeFile(`${__dirname}/dev-data/data/tours-simple.json`, JSON.stringify(tours), (err)=>{
        res.status(201).json({
            status : "success",
            data : {
                tour : newTour
            }
        })
    })
})
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
