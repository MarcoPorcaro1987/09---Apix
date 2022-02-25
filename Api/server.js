const express = require('express');

const app = express();
app.use(express.json())

const footballCatRoutes = require('./controller');
app.use('/footballCats', footballCatRoutes);

app.get('/', (req, res) => {
    res.send('Hello there!');
});

app.post('/', (req, res) => {
    res.status(405).send('Not allowed!');
});

module.exports = app;
