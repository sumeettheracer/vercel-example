const express = require('express')
const app = express();
app.get("/",function(req,res){
    res.send("<h1>Hello express is running</h1>")
})
app.listen(3000,function(){
    console.log("the server is running in the port 3000.")
})