const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://prathampawar6722:FWMm5FlbeIgYy4ix@cluster0.mfgf8gy.mongodb.net/?retryWrites=true&w=majority";

// Set up the MongoClient options
const mongoClientOptions = {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
};

// Create a new MongoClient instance
const client = new MongoClient(uri, mongoClientOptions);

async function run() {
  try {
    // Connect the client to the server
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensure that the client will close when you finish/error
    await client.close();
  }
}

run().catch(console.dir);