const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

(async function() {
    // Connection URL
    const url = 'mongodb://localhost:27017/chat-bot';
    // Database Name
    const dbName = 'chat-bot';
    const client = new MongoClient(url, {
        useUnifiedTopology: true,
        useNewUrlParser: true
    });

    try {
        // Use connect method to connect to the Server
        await client.connect({ useNewUrlParser: true });

        const db = client.db(dbName);
        const collection = db.collection('dates');
        //collection.insertOne({ date : new Date() });
        collection.find().toArray((err, item) => {
            console.log(item);
        });
    } catch (err) {
        console.log(err.stack);
    }

    client.close();
})();