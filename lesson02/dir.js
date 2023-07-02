const fs = require('fs');

if(!fs.existsSync('./lesson02/new')) {
  fs.mkdir('./lesson02/new', (err) => {
    if (err) throw err;
    console.log("directory created");
  });
}

if(fs.existsSync('./lesson02/new')) {
  fs.rmdir('./lesson02/new', (err) => {
    if (err) throw err;
    console.log("directory deleted");
  });
}