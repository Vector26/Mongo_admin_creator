const express = require('express');
var mongd=require("mongoose");
const Admin=require('./admin');

const app = express();
app.use(express.json({limit: '10kb'}));

conn = mongd.connect("mongodb://localhost/testingDB");
// Getting all the info out of a mongo DB using a connect object
conn.then((data)=>{
    var admin=new Admin(data);
    app.use("/admin",admin.getRouter());
    // console.log(admin.getRouter());
});

// conn.then((data)=>{
    // console.log(Object.keys(data.models));    
    // var list=Object.keys(data.models);
    // list.map((e)=>{
    //     pattern=mongd.model(e)
    //     pattern.find({},function(err,item){
    //         if(err){
    //             console.log(err);
    //         }
    //         else{
    //         console.log(item);
    //         }
    //     });
    // });
    // console.log(mongd.models);

// });

// Creating a schema
var friendpattern=new mongd.Schema({
    Name:{type:String,required:true},
    Rank:{type:Number}
});
// Register a schema into a model
var pattern=mongd.model("Friend",friendpattern);
// get schema pattern
// console.log(Object.keys(pattern.schema.obj));
// GET ALL ITEMS IN COLLECTIONS
// pattern.find({},function(err,item){
//     if(err){
//         console.log(err);
//     }
//     else{
//     console.log(item);
//     }
// });
// Creating a filter
// pattern.find({"Rank":3},(err,item)=>{
//     console.log("Filter works:");
//     console.log(item);
// });
// Creating a new data
// new pattern({Name:"Reet",Rank:3}).save(function(err,result){
//     if(err)
//     console.log(err);
//     else
//     console.log(result);
// });
// 
var wallpaperpattern=new mongd.Schema({
    Name:{type:String,required:true}
});

var pattern=mongd.model("Wallpaper",wallpaperpattern);

// const fourOfour = (req,res,next) => {
//     res.status(404).json({
//         status: "404"
//     })
//     next();
// }
// setting the template engine
// app.set("view engine","ejs");

// Example of return a template
// app.get("/upload",function(req,res){
//     res.render("upload");
// });

app.get("/",(req,res)=>{
    res.send(`<h1>HELLO WORLD</h1>`);
});


// app.use(fourOfour);

app.listen(3000,function(){
    console.log("Server Started _>");
    });