// Server to collect jj gear
const express = require('express');
const app = express();

const PORT = 3001;

app.use(express.static('public'));

app.use(express.urlencoded({extended: true}));
app.use(express.json());

const allRoutes = require('./controllers');
app.use(allRoutes);

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));