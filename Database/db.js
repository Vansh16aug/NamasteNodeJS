const { MongoClient } = require("mongodb");
require("dotenv").config();

const url =process.env.URL; 

const client = new MongoClient(url);

const dbName = "HelloWorld";

async function main() {
  await client.connect();
  console.log("Connected successfully to server");
  const db = client.db(dbName);
  const collection = db.collection("user");

  const data = {
    firstname: "Vansh",
    lastname: "Kumar",
    city: "Punjab",
    phoneNumber: "9530711728",
  };

  // const insertResult = await collection.insertOne(data);
  // console.log("Inserted one document =>", insertResult);

 const insertResult = await db.collection("inventory").insertMany([
   {
     item: "journal",
     qty: 25,
     tags: ["blank", "red"],
     size: { h: 14, w: 21, uom: "cm" },
   },
   {
     item: "mat",
     qty: 85,
     tags: ["gray"],
     size: { h: 27.9, w: 35.5, uom: "cm" },
   },
   {
     item: "mousepad",
     qty: 25,
     tags: ["gel", "blue"],
     size: { h: 19, w: 22.85, uom: "cm" },
   },
 ]);
  console.log("Inserted many documents =>", insertResult);

  //Read
  const findResult = await collection.find({}).toArray();
  console.log("Found documents =>", findResult);

  const countResult = await collection.countDocuments({});
  console.log("Count of documents in the User collection =>", countResult);

  // Find all documents with a filter of firstname: Deepika

  const result = await collection.find({ firstname: "Vansh" }).toArray();
  console.log("result => ", result);

  return "done.";
}

main()
  .then(console.log)
  .catch(console.error)
  .finally(() => client.close());
