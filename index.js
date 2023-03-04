const { MongoClient, ServerApiVersion } = require('mongodb');
// global.x = 2;
const connStr = "mongodb+srv://timemaster:iM6T4q6TYIRfrSso@cluster0.at41eaj.mongodb.net/?retryWrites=true&w=majority";

const options = { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 };
global.client = new MongoClient(connStr, options);

client.connect(err => {
  if (err) console.log(err)

  global.collection = client.db("test").collection("devices");

  // perform actions on the collection object

  collection.insertMany([
    { '_id': 1, 'item': 'abc', 'price': 10, 'quantity': 2, 'date': new Date('2014-03-01T08:00:00Z') },
    { '_id': 2, 'item': 'jkl', 'price': 20, 'quantity': 1, 'date': new Date('2014-03-01T09:00:00Z') },
    { '_id': 3, 'item': 'xyz', 'price': 5, 'quantity': 10, 'date': new Date('2014-03-15T09:00:00Z') },
  ]);

  client.close();
});