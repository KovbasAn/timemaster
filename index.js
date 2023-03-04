const connectToMongo = require('./connect.js')
const addTimestampTo = require('./timestamp.js')

connectToMongo().then(timestampCollection => {
  const timerID = setInterval(() => {
    addTimestampTo(timestampCollection)
  }, 3000)

  setTimeout(clearInterval, 10000, timerID)
}).catch(console.log)