const express = require('express');
const app = express();
const port = 3000;

app.get('/hello', (req, res) => {
  res.send('Hello World!');
});

console.log()

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});


