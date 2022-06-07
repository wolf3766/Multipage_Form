const express = require("express");
const bodyParser=require("body-parser");
const cors=require("cors");
const mongoose= require("mongoose");

const app = express();

app.use(express.json());
app.use(cors({ // to make browser send data on different hosts 
    origin:["http://localhost:3000"],
    methods:["Get","Post"],
    credentials: true
}));

app.use(bodyParser.urlencoded({ //to parse the data recieved with api
    extended:true
}));

mongoose.connect("mongodb://localhost:27017/loan") //database url (mongodb)

const loanSchema={
    Name:String,
    PhoneNumber:String,
    fathersname:String,
    occupation:String,
    martialstatus:String,
    age:Number,
    gender:String,
    Email:String,
    address:String,
    BusinessName:String,
    GST_NO:Number,
    city:String,
    state:String,
    zip:Number,
    annunalincome:Number,
    Loan_amount:Number,
    interest_rate:Number,
    loantenure:Number,
}

const loandetail=mongoose.model("loandetail",loanSchema);  


app.post("/create",(req,res)=>{
    //console.log("rec : ",req.body);
    const details=new loandetail({
        Name:req.body.Name,
        fathersname:req.body.fathersname,
        PhoneNumber:req.body.PhoneNumber,
        age:req.body.age,
        occupation:req.body.occupation,
        martialstatus:req.body.martialstatus,
        Gender:req.body.Gender,
        Email:req.body.Email,
        address:req.body.address,
        BusinessName:req.body.BusinessName,
        GST_NO:req.body.GST_NO,
        city:req.body.city,
        state:req.body.state,
        zip:req.body.zip,
        annunalincome:req.body.annunalincome,
        Loan_amount:req.body.Loan_amount,
        interest_rate:req.body.interest_rate,
        loantenure:req.body.loantenure
    });
    details.save();
    res.send("created ! ")
})


const PORT = process.env.PORT || 8080;
app.listen(PORT, console.log(`Server started on port ${PORT}`));