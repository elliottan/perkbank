// Install express server
const express = require('express');
const path = require('path');

const app = express();

// Serve only the static files form the dist directory
app.use(express.static(__dirname + '/dist/perkbank'));

app.get('/*', function(req,res) {
	res.sendFile(path.join(__dirname+'/dist/perkbank/index.html'));
});

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);

// Users API
users = { "admin": { username: "admin", password: "admin" },
"client": { username: "client", password: "client" }
}

app.route('/api/users/:username').get((req, res) => {
  const username = req.params['username']
  res.send(users[username])
})

const bodyParser = require('body-parser')
app.use(bodyParser.json())
app.route('/api/users').post((req, res) => {
  res.send(201, req.body)
})

app.route('/api/users/:username').put((req, res) => {
  res.send(200, req.body)
})

app.route('/api/users/:username').delete((req, res) => {
  res.sendStatus(204)
})