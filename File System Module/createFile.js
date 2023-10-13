var fs = require('fs');

fs.appendFile('mynewfile.txt', 'Hello ..from new File!', function (err) {
  if (err) throw err;
  console.log('Saved!');
});
