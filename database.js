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
   
     // the following code examples can be pasted here...
     const findResult = await collection.find({}).toArray();
     console.log('Found documents =>', findResult);
   
     return 'done.';
   }
   
   main()
     .then(console.log)
     .catch(console.error)
     .finally(() => client.close());