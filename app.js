import express from 'express';
const app = express();
const port = 4000;

app.use(express.json());

app.get('/', (req, res) => {
  res.json({ message: 'Welcome to Test Demo!' })
})

// Router 
require('./routes')(app);

app.listen(port, () => { console.log(`Server listening on port ${port}`) })
module.exports = app;