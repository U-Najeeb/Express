const express = require('express');
const fs = require('fs');
const app = express();

app.use(express.json());

const getAllTours = (req, res) => {
  res.status(200).json({
    status: 'sucesss',
    results: tours.length,
    tours,
  });
};

const getOneTour = (req, res) => {
  const id = req.params.id;
  const tour = tours.find((el) => el.id == id);
  res.status(200).json({
    status: 'success',
    tour,
  });
};

const addATour = (req, res) => {
  const newId = tours.at(tours.length - 1).id + 1;
  const newTour = Object.assign({ id: newId }, req.body);
  tours.push(newTour);
  console.log(tours);
  fs.writeFile(
    `${__dirname}/dev-data/data/tours-simple.json`,
    JSON.stringify(tours),
    () => {
      res.status(201).json({
        status: 'success',
        data: {
          tour: newTour,
        },
      });
    }
  );
};
const updateTour = (req, res) => {
  const id = req.params.id;
  if (id > tours.length - 1) {
    return res.status(404).json({
      status: 'Failed',
      message: 'Invalid ID',
    });
  }
};
const deleteTour = (req, res) => {
  const id = req.params.id;
  if (id > tours.length - 1) {
    return res.status(404).json({
      status: 'Failed',
      message: 'Invalid ID',
    });
  }
};
const tours = JSON.parse(
  fs.readFileSync(`${__dirname}/dev-data/data/tours-simple.json`)
);
// app.get('/api/v1/tours', getAllTours);

// app.post('/api/v1/tours', addATour);

// app.get('/api/v1/tours/:id', getOneTour);

// app.patch('/api/v1/tours/:id', updateTour);

// app.delete('/api/v1/tours/:id', deleteTour);

app.route('/api/v1/tours').get(getAllTours).post(addATour);
app
  .route('/api/v1/tours/:id')
  .get(getOneTour)
  .patch(updateTour)
  .delete(deleteTour);
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
