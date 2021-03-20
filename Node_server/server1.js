var mongoClient = require('mongodb').MongoClient;
var express = require('express');
var bodyParser = require('body-parser');
var urle = bodyParser.urlencoded({
    extended: true
  })
var app=express();
const url = 'mongodb://localhost:27017';
const dbname = "pizza";
var cors = require('cors');
app.use(cors());
app.use(bodyParser.json());

app.get('/',function(req,res){
    res.send("Connected Server");
    console.log("Server connected.");
})

app.get('/getOrderList',function(req,res){
    mongoClient.connect(url,function(err,client){
        if(err){
            console.log("error in connecting");

        }
        else{
            console.log("connected");
            var db=client.db(dbname);
            db.collection("orderInfo").find().toArray(function(err,result){
                if(err){
                    console.log(err);
                }
                else{
               
                    res.json(result);
                }
         
    });
    client.close();
}
});
});

app.get('/getBuildList',function(req,res){
    mongoClient.connect(url,function(err,client){
        if(err){
            console.log("error in connecting");

        }
        else{
            console.log("connected");
            var db=client.db(dbname);
            db.collection("ingredientsInfo").find().toArray(function(err,result){
                if(err){
                    console.log(err);
                }
                else{
               
                    res.json(result);
                }
         
    });
    client.close();
}
});
});

app.post('/addCartList',urle, function(req,res){
    console.log(req.body);
	mongoClient.connect(url,function(err,client) {  
	if(err){
            console.log(err);
         }else{
                console.log("Connected to database");
				 var db=client.db(dbname);
	            var collection = db.collection('cartInfo');   
                collection.insertOne(req.body,function (err, result) {
      if (err) {
        res.send(err);
      } else {
        console.log('Pizza Added Successfully!!!');
      };
      client.close();
    });
	}
  });
});

app.post('/addtocart',urle, function(req,res){
 
    mongoClient.connect(url,function(err,client) {
  
    if(err){
            console.log("error connecting to database :"+err);
         }else{
                console.log("Connected to database");
                 var db=client.db(dbname);
                db.collection('cartInfo').insertOne(req.body, function (err, result) {
      if (err) {
        res.send(err);
      } else {
        res.send('Added Successfully!!!');
      };
      client.close();
    });
 
    }
  });
});



app.get('/getCartList',function(req,res){
    mongoClient.connect(url,function(err,client){
        if(err){
            console.log("error in connecting");
        }
        else{
            console.log("connected");
            var db=client.db(dbname);
            db.collection("cartInfo").find().toArray(function(err,result){
                if(err){
                    console.log(err);
                }
                else{               
                    res.json(result);
                }
         
    });
    client.close();
}
});
});

app.post('/login',(req, res)=> {
     mongoClient.connect(url,function(err,client){
         if(err)
             console.log("error in connection with db :"+err);
         else{
             console.log("Connection is successfull");
             var db=client.db(dbname);
             db.collection("login").find({name:req.body.name,password:req.body.pass}).toArray(function(err,result){
                 if(err){
                     console.log(err); 
                 }
                 else{
                     console.log(result);
                     res.json(result);
                 }
             });
             client.close();
         }
     })
 });

 app.post('/register',(req,res)=>{
    mongoClient.connect(url,(err,res)=>{
      if(err)
        console.log(err)
      else
      {
        console.log("Connected to database.")
        let db = res.db(dbname);
        db.collection("login").insertOne((req.body),(err,res)=>{
          if (err)
            console.log(err)
          else
            console.log("data inserted successfully")
        })
      }
    })
  })

app.listen(4000,()=>console.log("server is running at 4000"));