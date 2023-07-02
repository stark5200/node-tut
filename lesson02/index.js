const fsPromises = require('fs').promises;
const path = require('path')

const fileOps = async () => {
  try {
    //const data = await fsPromises.readFile(path.join(__dirname, 'files', 'starter.txt'), 'utf8'); 
    //console.log(data);
    //await fsPromises.unlink(path.join(__dirname, 'files', 'starter.txt'));
    
    await fsPromises.writeFile(path.join(__dirname, 'files', 'W-with-await.txt'), 'new Write\n');
    await fsPromises.appendFile(path.join(__dirname, 'files', 'W-with-await.txt'), 'added line 02\n');
    await fsPromises.rename(path.join(__dirname, 'files', 'W-with-await.txt'), path.join(__dirname, 'files', 'promiseComplete.txt'));
    const newData = await fsPromises.readFile(path.join(__dirname, 'files', 'promiseComplete.txt'), 'utf8');
    console.log(newData);

  } catch (err) {
    console.error(err);
  }
}

fileOps();

//console.log("Hello...")
//
//fs.writeFile(path.join(__dirname, 'files', 'response.txt'), 'KAWABONGA\n', (err) => { 
//  // or use complete path without path.join './lesson02/files/starter.txt'
//  if (err) throw err;
//  console.log('Write complete');
//
//  fs.appendFile(path.join(__dirname, 'files', 'response.txt'), 'Hello dumb dumb\n', (err) => { 
//    // or use complete path without path.join './lesson02/files/starter.txt'
//    if (err) throw err;
//    console.log('Appending complete');
//
//    fs.rename(path.join(__dirname, 'files', 'response.txt'), path.join(__dirname, 'files', 'renamed.txt'), (err) => { 
//      // or use complete path without path.join './lesson02/files/starter.txt'
//      if (err) throw err;
//      console.log('rename complete');
//      })
//  })
//})





//exit on uncaught errors 
process.on('uncaughtException', err => {
  console.error(`there was an uncaught error: ${err}`);
  process.exit(1);
})