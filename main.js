// Importing necessary modules
const express = require('express');

// Creating an Express application
const app = express();
const PORT = process.env.PORT || 3000; // Port on which the server will run

// Middleware to parse JSON bodies
app.use(express.json());

// Route handling
app.get('/', (req, res) => {
  res.send('Hello, I am node js in container');
});

app.post('/api/data', (req, res) => {
  // Assuming the client sends JSON data in the request body
  const data = req.body;
  console.log('Received data:', data);
  res.send('Data received successfully.');
});

// Starting the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
