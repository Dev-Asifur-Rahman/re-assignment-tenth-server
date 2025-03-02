const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
require("dotenv").config();

const uri = `mongodb+srv://${process.env.DB_NAME}:${process.env.DB_PASS}@cluster0.mcintht.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run(app) {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();

    // database
    const TenthDB = client.db("TenthDB");

    // collection
    const collection = TenthDB.collection("collection");

    // insert operation
    // app.post("/doc/:data", async (req, res) => {
    //   const data = req.params.data;
    //   const obj = req.body;
    //   const result = await collection.insertOne(obj);
    //   res.send(result)
    // });

    // post
    // app.get("/doc", async (req, res) => {
    //   const allDocs = collection.find();
    //   const result = await allDocs.toArray();
    //   res.send(result);
    // });

    // delete 
    // app.delete('/doc/:id',async(req,res)=>{
    //   const id = req.params.id
    //   const query = {_id: new ObjectId(id)}

    //   const result = await collection.deleteOne(query)
    //   res.send(result)
    // })

    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}

module.exports = { run };
