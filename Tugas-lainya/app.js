var express = require('express');
var app = express();
var bodyParser = require('body-parser');

var urlencodedParser = bodyParser.urlencoded({extended:false})

app.use(express.static('public'));
app.get('/form.htm',function(req,res){
  res.sendFile(__dirname +"/"+"form.htm");
})

app.post('/process_post', urlencodedParser, function (req, res) {
   // Prepare output in JSON format
   response = {
      first_name:req.body.first_name,
      last_name:req.body.last_name
   };
   console.log(response);
   res.end(JSON.stringify(response));
})

app.listen(8080,"192.168.1.15");
