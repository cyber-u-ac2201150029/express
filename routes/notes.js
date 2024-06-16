var express = require('express');
var router = express.Router();

const { MongoClient } = require("mongodb");
const uri ="mongodb+srv://2201150029xo:LxnfaHZlrKsKww1w@test.q27siag.mongodb.net/?retryWrites=true&w=majority&appName=Test";
const client = new MongoClient(uri);



router.get('/', async (req, res) => {
    
    // const { MongoClient } = require("mongodb");
    // const uri ="mongodb+srv://2201150029xo:LxnfaHZlrKsKww1w@test.q27siag.mongodb.net/?retryWrites=true&w=majority&appName=Test";
    // const client = new MongoClient(uri);    

    // データベース、コレクションを指定
    const database = client.db('notes');
    const notes = database.collection('notes');

    console.log(notes); 
    
    //idが1のドキュメントを取得
    const query ={id: 1};

    console.log('query:'+ query); 

    const note = await notes.findOne(query);
    
    console.log(note); 

    res.json(note.title);
  
})



module.exports = router;