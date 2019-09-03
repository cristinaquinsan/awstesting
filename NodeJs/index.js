const express = require('express');
const app = express();
var cors = require('cors')
 
app.use(cors())
// Constants
app.set('port', process.env.PORT || 3000);


// App

app.get('/api', (req, res) => {
  res.send({
    str: "Hello world, this is meeeee"
  });
});

app.listen(app.get('port'),function () {
  console.log('Example app listening on port 3000!');
});
//console.log(`Running on http://${HOST}:`,app.get('port'));