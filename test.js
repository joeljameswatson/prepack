var snakecaseKeys = require('snakecase-keys')

const snaked = snakecaseKeys({runTest: 'baz'})
console.log('snaked:' , snaked)

