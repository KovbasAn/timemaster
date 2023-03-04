const { addTimestampTo, getTimestampsFrom } = require("./timestamp")

module.exports = {
  '/timestamp': (collection) => {
    addTimestampTo(collection)
  },

  '/timestamps': async (collection, response) => {
    const timestamps = await getTimestampsFrom(collection)
    const json = JSON.stringify(timestamps)

    response.end(json)
  }
}