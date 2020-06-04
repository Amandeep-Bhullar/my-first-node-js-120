//import express and assigned to variable
const express=require("express");

//Create Express APP Object()
const app=express(); 


//www.facebook.com
//
app.get("/",(req,res)=>{
    res.send(`<h1>Home Page</h1>`)
});

app.get("/about",(req,res)=>{
    res.send(`<h1>About Page<h1>`) 
});

//Create our web server
//Port number
app.listen(3000,()=>{
    console.log(`Web Server is up and running`);
})