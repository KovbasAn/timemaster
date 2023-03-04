const { MongoClient, ServerApiVersion } = require('mongodb')

const connStr = "mongodb+srv://timemaster:iM6T4q6TYIRfrSso@cluster0.at41eaj.mongodb.net/?retryWrites=true&w=majority"

const options = { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 }

module.exports = connectToMongo

async function connectToMongo() {
  const client = new MongoClient(connStr, options);

  await client.connect()

  return client.db("time_db").collection("timestamps")
}