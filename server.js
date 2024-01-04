const express = require('express');
const cors = require('cors'); // Add this line
const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors()); // Add this line

app.get('/', (req, res) => {
  res.send('Hello from the backend!');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
