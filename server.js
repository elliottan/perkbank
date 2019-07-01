// Install express server
const express = require('express');
const path = require('path');

const app = express();

// Cors
const cors = require('cors');

var corsOptions = {
  origin: 'http://example.com',
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204 
};

app.use(cors(corsOptions));

// Serve only the static files form the dist directory
app.use(express.static(__dirname + '/dist/perkbank'));

app.get('/*', function(req,res) {
	res.sendFile(path.join(__dirname+'/dist/perkbank/index.html'));
});

const bodyParser = require('body-parser');
app.use(bodyParser.json());

// Users API
var users = [
{ username: "admin", password: "admin" },
{ username: "client", password: "client" }
];

app.route('/api/users').get((req, res) => {
  res.send(users);
});

app.route('/api/users/:username').get((req, res) => {
  const username = req.params['username']
  // res.send(users.find({(user)=>(user.username == username)}));
  res.send({ username: "client", password: "client" })
});

app.route('/api/users').post((req, res) => {
  res.send(201, req.body);
});

app.route('/api/users/:username').put((req, res) => {
  res.send(200, req.body);
});

app.route('/api/users/:username').delete((req, res) => {
  res.sendStatus(204);
});

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);
