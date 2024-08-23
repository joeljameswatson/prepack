var snakecaseKeys = require('snakecase-keys')

const snaked = snakecaseKeys({runBuildRequiringOtherNodeModules: 'baz'})
console.log('snaked:' , snaked)