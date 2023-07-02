console.log("Hello world");
//console.log(global);

const os = require('os')
const path = require('path')
const math = require('./math')
// or const {add, sub, mlt, div} = require('./math') 
// console.log(add(5, 4))


console.log(os.type())
console.log(os.version())
console.log(os.homedir())

console.log(__dirname)
console.log(__filename)

console.log(path.dirname(__filename))
console.log(path.basename(__filename))
console.log(path.extname(__filename))
console.log(path.parse(__filename))

console.log(math.add(5, 4))
console.log(math.sub(5, 4))
console.log(math.mlt(5, 4))
console.log(math.div(5, 4))



