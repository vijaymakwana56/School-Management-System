const express = require("express");
const schoolRoutes = require("./routes/schoolRoutes");

const app = express();

app.use(express.urlencoded())
// app.use(express.json());
app.use('/', schoolRoutes);

app.listen(8000, ()=>{
    console.log("server running on port 8000");
});