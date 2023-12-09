
const express = require('express');
const mongoose = require('mongoose');

const uri = "mongodb+srv://jsancal99:Clgupyuv8@snapshat0.rbpnsyt.mongodb.net/snap?retryWrites=true&w=majority";
const app = express();
const PORT = process.env.PORT || 3000;

async function connect()
{
    try{
        mongoose.connect(uri);
        console.log("Connected to MongoDB");
    } catch(err)
    {
        console.error(error);
        console.error('error. sry');
    }
}
connect();

const wordSchema = new mongoose.Schema({
  word: String
});

const Word = mongoose.model('Word', wordSchema);

app.use(express.urlencoded({
  extended: true
}));
app.use(express.json());


mongoose.connection.once('open', () => {
  app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);

  });  
})
app.get('/submit', (req, res) => {
  const newWord = new Word({ word: /*req.body.word*/req.query.word});

  newWord.save();
  let MongoClient = require('mongodb').MongoClient;
  // or
  let connectionUrl = uri;
  // creating the message object
  MongoClient.connect(connectionUrl, function(err, client)
  {
    if (err) throw err;

    console.log("Connected correctly to server");

    // if database and collection do not exist they are created

    var db = client.db('snap')

    db.collection("words").insertOne(newWord, function(err, res) {
        if (err) throw err;
        console.log("1 message inserted");
        client.close();
    });
  });
  res.redirect('/');
});

app.post('/', (req, res) => {
  res.redirect("index.html");
});