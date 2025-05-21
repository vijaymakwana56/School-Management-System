const express = require("express");

const app = express();

app.use('/', (req, res) =>{
    res.send("this is homepage");
});

app.listen(8000, ()=>{
    console.log("server running on port 3000");
});