const express = require('express');
const path = require('path');
const app = express();
const PORT = 3002;

app.use(express.static('static'));
  
app.listen(PORT, () => console.log(`Server listening on port: ${PORT}`));
