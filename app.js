const express = require("express");
require("dotenv").config();
const schoolRoutes = require("./routes/schoolRoutes");

const app = express();

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use('/', schoolRoutes);

app.listen(process.env.PORT, ()=>{
    console.log("server running on port", process.env.PORT);
});