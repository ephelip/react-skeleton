//Dependencies
var express = require('express');
var bodyParser = require('body-parser');
var app = express();

//Allow all requests from all domains & localhost
app.all('/*', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods", "POST, GET");
  next();
});

//Setup
var PORT = process.env.PORT || 6060;

//MiddleWares
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

var subscribers = [
    {
        "id": "234kjw",
        "email": "etienne.phelip@gmail.com",
        "firstName": "Etienne",
        "lastName": "Phelip"
    }
];

//Routes
app.get('/', function(req, res){
  res.json({
    content : "You hit the base route. If you can read this, then the Express Server is working as intended."
  });
});

app.get('/subscribers', function(req, res) {
    console.log("GET From SERVER");
    res.send(subscribers);
});

app.post('/subscribers', function(req, res) {
    var subscriber = req.body;
    subscriber.id = Math.floor(Date.now() /1000) + req.body.email;
    console.log("POST: " + req.body);
    subscribers.push(subscriber);
    res.status(200).send("Successfully added subscriber");
});

//Server start
app.listen(PORT, function(err){
  if(err){
    console.log(err);
  }else{
    console.log('Express server listening on port '+PORT);
  }
});
