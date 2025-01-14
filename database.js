const { MongoClient } = require('mongodb');


const url = 
   "mongodb+srv://maesitorsunil:hHCxW3Bj02xxj0H9@namastenode.h0eeh.mongodb.net/";

   
   const client = new MongoClient(url);
   
   // Database Name
   const dbName = 'Hello';
   
   async function main() {
     // Use connect method to connect to the server
     await client.connect();
     console.log('Connected successfully to server');
     const db = client.db(dbName);
     const collection = db.collection('User');

     const data = {
        firstname: "The",
        lastname: "Batman",
        age: 30,
        country: "India"
     };
    
     //const insertResult = await collection.insertMany([data]);
     //console.log('Inserted documents =>', insertResult);

     // the following code examples can be pasted here...

     const findResult = await collection.find({}).toArray();
     console.log('Found documents =>', findResult);

     //const filteredDocs = await collection.find({ data }).toArray();
    // console.log('Found documents filtered by { a: 3 } =>', filteredDocs);

   // const updateResult = await collection.updateOne({ age: 30 }, { $set: { age: 20} });
   // console.log('Updated documents =>', updateResult);
   const deleteResult = await collection.deleteMany({ age: 22 });
   console.log('Deleted documents =>', deleteResult);
   
     return 'done.';
   }
   
   main()
     .then(console.log)
     .catch(console.error)
     .finally(() => client.close());