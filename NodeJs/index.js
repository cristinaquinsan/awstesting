const express = require('express');
const app = express();

// Constants
app.set('port', process.env.PORT || 3000);
const HOST = 'localhost';

// App
app.get('/', (req, res) => {
  res.send({
    str: "Hello world, this is meeeee"
  });
});

app.listen(app.get('port'), HOST);
console.log(`Running on http://${HOST}:`,app.get('port'));