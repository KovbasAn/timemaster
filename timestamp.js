const { Timestamp } = require('mongodb')

module.exports = { addTimestampTo, getTimestampsFrom }

async function addTimestampTo(collection) {
  await collection.insertOne({ ts: new Timestamp })
}

async function getTimestampsFrom(collection) {
  const cursor = collection.find({})
  const timestamps = await cursor.toArray()

  return timestamps.map(({ ts }) => ts.high)
}
