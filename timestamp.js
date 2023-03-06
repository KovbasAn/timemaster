const { Timestamp } = require('mongodb')

module.exports = { addTimestampTo, getTimestampsFrom }

async function addTimestampTo(collection, record) {
  await collection.insertOne({ ts: new Timestamp, event: record.event?.slice(0, 100) })
}

async function getTimestampsFrom(collection) {
  const cursor = collection.find({})
  const timestamps = await cursor.toArray()

  return timestamps.map(({ ts }) => ts.high)
}
