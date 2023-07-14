const express=require('express');
const path=require('path')
var app=express();
var server=require('http').createServer(app);
app.use(express.json());
app.use(express.static(path.join(__dirname,'build')))
app.use(express.urlencoded({extended : false}));

app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'build/index.html'))
});

app.get('/test',(req,res)=>{
    res.json("You pressed link!")
})

server.listen(80,()=>{
    console.log("Server on 80")
});

