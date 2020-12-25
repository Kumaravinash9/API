const { userInfo } =  require("os");
const express      =  require("express"),
       cat         =  require("cat-me"),
       fs          =  require("fs"),
       cors        =  require("cors"),
       mongoose    =  require("mongoose"),
       UserData    =  require("./models/Users"),
       bodyParser  =  require("body-parser"),

       //data     = require("./myFile.json"),  // no need to install it's comes with express itself.

       app         =  express();
       app.use(cors());
       app.use(express.json());
       app.set("view engine","ejs");
      

    //mongoose.connect("mongodb://localhost:27017/Api",{useNewUrlParser:true,useUnifiedTopology: true });

    mongoose.connect("mongodb+srv://avinash:9905645732@cluster1.pkvrv.mongodb.net/Intern?retryWrites=true&w=majority",{useNewUrlParser:true,useFindAndModify:true,useUnifiedTopology:true});
    mongoose.connection.on("connected",()=>{
    console.log("it's Connected Now");
    })

    mongoose.connection.on("error",()=>{
    console.log("anything is garbar ");
    })
  

    app.use(bodyParser.urlencoded({extended:true}));
    app.set("view engine","ejs");
    app.get("/",function(req,res){
     res.render("new.ejs");
    });

      app.get("/json",function(req,res){
        var date=new Date(Date.now());
        var obj=[],obj1;
        UserData.find({},function(err,user){
        if(err)
        console.log(err);
        else
        {  
         res.json({user}); 
        }
        });

     });

    app.post("/",function(req,res){
        

        UserData.create({
        first_name:req.body.first_name,
        last_name:req.body.last_name,
        username:req.body.username,
        loan_amount:req.body.loan_amount,
        address:req.body.address,
        account_details: {
        account_no:  req.body.account_no,
        available_balance:req.body.available_balance,
        },
        phone_no: req.body.phone_no
        },function(err,user){
        if(err)
        console.log(err);
        else
        res.redirect("/json");

        });
        });
       
     
        app.listen(3000,function(){
        console.log(cat());})