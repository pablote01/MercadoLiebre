//Requires 

const express = require ('express');
const path = require('path')

const app = express();
const port = 3005

//Config

app.use (express.static(path.join(__dirname, 'public')))
app.listen(port, () => (console.log('Nuestra App corre en http://localhost:'+port)))

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views','home.html'))
  });

  app.get('/index', (req, res) => {
    res.sendFile(path.join(__dirname, 'views/index.html'))
  });
