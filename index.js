const connectToMongo = require('./connect.js')
const runServer = require('./server.js')
const endpointDict = require('./endpoints.js')

connectToMongo().then(runServer(endpointDict)).then(
  url => console.log('Server started at ' + url)
)