const express = require('express')
const cors = require('cors');
require('dotenv').config();
const { MongoClient, ServerApiVersion } = require('mongodb');

const port = process.env.POST || 5000;
const app = express()

//modeleware
app.use(cors());
app.use(express.json());

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.ewqse.mongodb.net/?retryWrites=true&w=majority`;

const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

async function run() {
    try {

        await client.connect();
        const servicesCollection = client.db('todo-task').collection('services');



         // all service data load kora display te
        //  app.get('/service', async (req, res) => {
        //     const query = {};
        //     const cursor = serviceCollection.find(query);
        //     const services = await cursor.toArray();
        //     res.send(services);
        // });

        //single data id set korar jonno

        
    }

    finally {

    }

}


run().catch(console.dir);


app.get('/', (req, res) => {
    res.send('Hello from todo!')
})

app.listen(port, () => {
    console.log(`Example app listening on port ToDo ${port}`)
})