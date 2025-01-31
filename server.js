const express = require('express');
const app = express();
const port = 3000;

// Define the registered email address and GitHub URL
const registeredEmail = 'davidakinola26@gmail.com';  // Replace with your actual email
const githubURL = 'https://github.com/davisvidic-lab/hngtask_api.git';  // Replace with the actual GitHub URL

// Define the route for the public API
app.get('/api/info', (req, res) => {
  const response = {
    email: registeredEmail,
    datetime: new Date().toISOString(),  // Current datetime in ISO 8601 format
    github_url: githubURL
  };

  res.json(response);  // Return the information as JSON
});

// Start the server
app.listen(port, () => {
  console.log(`API server running at http://localhost:${port}`);
});
