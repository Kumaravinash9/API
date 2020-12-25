var mongoose = require("mongoose"),
    Schema= new mongoose.Schema({
     first_name:
     {
         type:String,
         
     },
     username:
     {
         type:String,
        
     },
     last_name:
     {
          type:String,
     },
     address:
     {
         type:String,
        

     },
     
     loan_amount:
     {
         type:String,
        
     },
     
     account_details:
         {  
             account_no:
             {
                 type:String,
                
             },
             available_balance:
             {
                 type:String
             },
            },

     phone_no:
    {
        type:String,
        
    }

    })
    module.exports= mongoose.model("User",Schema);