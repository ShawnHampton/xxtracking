const express = require('express');
const path = require('path');
const app = express();
const bodyParser = require('body-parser');

// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Serve the static files from the React app
app.use(express.static(path.join(__dirname, './../../build')));

const apiRoutes = require('./routes.js');
app.use('/api', apiRoutes);

app.get('*', function(request, response) {
	response.sendFile(path.resolve(__dirname, './../../build', 'index.html'));
});

app.listen(3000); //listens on port 3000 -> http://localhost:3000/
