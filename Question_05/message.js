const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'message.txt');
const content = '👉 "Node.js File System Working!"';

fs.writeFile(filePath, content, 'utf8', (err) => {
  if (err) {
    console.error('Failed to write file:', err.message);
    process.exitCode = 1;
    return;
  }
  console.log('Success: message.txt has been created with the message.');
});
