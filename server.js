const path = require('path');
const express = require("express");
const bodyParser = require('body-parser');
const InstaDownloaderLib = require('./server/InstaDownloaderLib');


const PORT = process.env.PORT || 8080;

const app = express();
app.use(bodyParser.json());


if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));
}

// Have Node serve the files for our built React app
app.use(express.static(path.resolve(__dirname, 'client/build')));

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

// All other GET requests not handled before will return our React app
app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client/build', 'index.html'));
  });

app.post('/api',InstaDownloaderLib );


app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
  console.log('Url: http://localhost:8080');
});