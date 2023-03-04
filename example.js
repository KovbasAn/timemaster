const { MongoClient, ServerApiVersion } = require('mongodb');
// global.x = 2;
const connStr = "mongodb+srv://timemaster:iM6T4q6TYIRfrSso@cluster0.at41eaj.mongodb.net/?retryWrites=true&w=majority";

const options = { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 };
global.client = new MongoClient(connStr, options);

client.connect().then(() => {
  global.tsColl = client.db("time_db").collection("timestamps");

  // perform actions on the collection object


  // client.close();
}).catch(console.log);
