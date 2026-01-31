const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// GET handler for root URL
app.get('/', (req, res) => {
  res.send('Hello, world!');
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
