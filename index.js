const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.use(express.static(`assets`))
app.use(bodyParser.json())



const messages = [{message: "First message", time: new Date(), length: 13}]

app.get(`/messages`, function (req, res, next){
  res.status(200).json({ messages: messages})  
    
})


app.post(`/messages`, function (req, res, next){
    messages.push({
        message: req.body.message, 
        time: new Date(),
        length: req.body.message.length
    });
    res.status(200).json({ messages: messages});
//    console.log(req.body);
    
})




app.listen(3000, function(){
    console.log("listening on port 3000")
})
