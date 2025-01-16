const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files from the frontend/public directory
app.use(express.static(path.join(__dirname, '../frontend/public')));

// Default route
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../frontend/public/index.html'));
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
