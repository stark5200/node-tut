const fs = require('fs');

const rs = fs.createReadStream('./lesson02/files/lorem.txt', { encoding: 'utf-8' });
const ws = fs.createWriteStream('./lesson02/files/new-lorem.txt');

//rs.on('data', (dataChunk) => {
//  ws.write(dataChunk);
//})

rs.pipe(ws);