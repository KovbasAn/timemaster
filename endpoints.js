const { addTimestampTo, getTimestampsFrom } = require("./timestamp")

module.exports = {
  '/timestamp': (collection, request) => {
    request.on('data', chunk => addTimestampTo(collection, JSON.parse(chunk)))
  },

  '/timestamps': async (collection, response) => {
    const timestamps = await getTimestampsFrom(collection)
    const json = JSON.stringify(timestamps)

    response.end(json)
  }
}