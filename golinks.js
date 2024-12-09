const express = require('express');
const app = express();
const port = 80;

// Configuration object for URL paths and their corresponding FQDNs
const urlConfig = {
  '/path1': 'https://example1.com',
  '/path2': 'https://example2.com',
  '/path3': 'https://example3.com',
  '/path4/subpath1': 'https://example4.com',
};

// Convert all keys in urlConfig to lowercase
const lowerCaseUrlConfig = Object.fromEntries(
  Object.entries(urlConfig).map(([key, value]) => [key.toLowerCase(), value])
);

// Middleware to handle redirection
app.use((req, res, next) => {
  const fqdn = lowerCaseUrlConfig[req.path.toLowerCase()];
  if (fqdn) {
    res.redirect(fqdn);
  } else {
    res.status(404).send('Not Found');
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
