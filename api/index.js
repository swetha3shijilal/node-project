const express = require("express");
const cors = require("cors");
const app = express();
const port=3001;
app.use(cors());
app.use(express.json());
app.get('/getdata/:id',(req,res)=>{
    console.log(req.params.id);
    res.send("hello world");
});

app.post('/createdata',(req,res)=>{
    const data =req.body;
    console.log(data);
    res.send("data recieved");
});




app.listen(port,()=>{
    console.log("server running on port",{port})
})