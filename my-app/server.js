const express=require('express');
const path=require('path')
const { MongoClient, ServerApiVersion } = require('mongodb');
var app=express();
var server=require('http').createServer(app);
app.use(express.json());
app.use(express.static(path.join(__dirname,'build')))
app.use(express.urlencoded({extended : false}));

app.get('*',(req,res)=>{
    res.sendFile(path.join(__dirname,'build/index.html'))
});

app.post('/dologin',async (req,res)=>{
    try{
      await client.connect();
      userdata=client.db('Users').collection('employees');
      const result=await userdata.find(req.body).toArray();
      if(result.length>0)
      {
        //return user info
        res.json({result:"SUCCESS"});
      }
      else
      //login false
        res.json({result:"FAIL"});
    }
    finally
    {
      // client.close();
    }
  
  });

  app.post('/checkid',async (req,res)=>{
    try{
      await client.connect();
      userdata=client.db('Users').collection('employees');
      const result=await userdata.find(req.body).toArray();
    if(result.length>0)
    {
      res.json("exist");
    }
    else
    {
      res.json("OK");
    }
    }
    finally
    {
      // client.close();
    }
  
  });

  app.post('/dosignup',async (req,res)=>{
    try{
      await client.connect();
      userdata=client.db('Users').collection('employees');
      await userdata.insertOne(req.body)
      res.json({result:"OK"})
    }
    finally
    {
      // client.close();
    }
  
  });

server.listen(80,()=>{
    console.log("Server on 80")
});

const uri = "mongodb+srv://gloveman:holahola@data.le9clcc.mongodb.net/?retryWrites=true&w=majority";

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});