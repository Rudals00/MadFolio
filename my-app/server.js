const express=require('express');
const path=require('path')
const fs=require('fs')
const { MongoClient, ServerApiVersion } = require('mongodb');
var app=express();
var server=require('http').createServer(app);
var multer=require('multer')


const storage=multer.diskStorage({
  destination:(req,file,cb)=>{
    cb(null,path.join(__dirname,'public/'));
  },
  filename:(req,file,cb)=>{
    if(req.params.index)
      cb(null,req.params.id+"_"+req.params.index+".png")
    else
      cb(null,req.params.id+"_profile.png")
  }
})
const upload=multer({storage:storage})

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

  app.post('/getuserdata',async (req,res)=>{
    try{
      await client.connect();
      userdata=client.db('Users').collection('employees');
      const result=await userdata.find(req.body).toArray();
    if(result.length>0)
    {
      res.json(result[0])
    }
    else
    {
      res.json("ERROR");
    }
    }
    finally
    {
      // client.close();
    }
  
  });

  app.post('/getallusers',async (req,res)=>{
    try{
      await client.connect();
      userdata=client.db('Users').collection('portfolios');
      const result=await userdata.find().toArray();
    if(result.length>0)
    {
      let reslist=[]
      for (const user of result)
      {
        temp={}
        temp.id=user.id
        temp.name=user.name
        temp.job=user.job
        reslist.push(temp)
      }
      res.json(reslist)
    }
    else
    {
      res.json("ERROR");
    }
    }
    finally
    {
      // client.close();
    }
  
  });

  app.post('/getcvdata',async (req,res)=>{
    try{
      await client.connect();
      userdata=client.db('Users').collection('portfolios');
      const result=await userdata.find(req.body).toArray();
    if(result.length>0)
    {
      res.json(result[0])
    }
    else
    {
      res.json("ERROR");
    }
    }
    finally
    {
      // client.close();
    }
  
  });

  app.post('/addcv',async (req,res)=>{
    try{
      await client.connect();
      userdata=client.db('Users').collection('portfolios');
      await userdata.replaceOne({id:req.body.id},req.body,{upsert:true})
      res.json({result:"SUCCESS"})
      
      
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



  app.post('/uploadimage/:id',upload.single('image'),(req,res)=>{
    try{
      console.log("프로필 업로드됨")
      res.json({result:"OK"})
    }
    finally
    {
      // client.close();
    }
  
  });
  app.post('/uploadimage/:id/:index',upload.single('image'),(req,res)=>{
    try{
      console.log("프로젝트 업로드됨")
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

// 크롤링

const cheerio = require("cheerio");
const axios = require("axios");
const iconv = require("iconv-lite");
const url = "https://www.saramin.co.kr/zf_user/jobs/list/job-category?cat_mcls=2&panel_type=&search_optional_item=n&search_done=y&panel_count=y&preview=y";

const fetchData = async(url) => {
  const result = await axios.get(url);
  return cheerio.load(result.data);
};

const $ = await fetchData(url);

