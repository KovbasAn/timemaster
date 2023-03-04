const { Timestamp } = require('mongodb')

module.exports = addTimestampTo

async function addTimestampTo(collection) {
  await collection.insertOne({ts: new Timestamp})
}