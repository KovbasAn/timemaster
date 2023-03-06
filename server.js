const { readFileSync } = require('fs')
const { createServer } = require('http')

const port = 3000

const server = createServer()

module.exports = runServer

function runServer(endpointDict) {
  return (collection) => {
    server.addListener('request', handleRequest)

    return new Promise(resolve => {
      server.listen(port, () => resolve('http://localhost:' + port))
    })

    function handleRequest(request, response) {
      const { url } = request

      if (url in endpointDict) {
        endpointDict[url](collection, request, response)
      } else {
        try {
          const path = url.slice(1) || 'index.html'
          const file = readFileSync('public/' + path)

          response.end(file)
        } catch (error) {
          response.statusCode = 404
          response.end('File not found: ' + url)
        }
      }
    }
  }
}
