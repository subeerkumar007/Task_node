const express = require('express');
const router = require('./router');

const app = express();
const PORT = 5000;

app.use('/', router);

app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});

module.exports = app;
