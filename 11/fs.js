var fs = require('fs');

fs.writeFileSync('message.txt', 'Hello Node', function (err) {
  if (err) throw err;
  console.log('It\'s saved!');
});
