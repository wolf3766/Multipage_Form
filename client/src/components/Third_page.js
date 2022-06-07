import axios from "axios"
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/firstpage.css"

function Third_Page({formdata,handlechange}){
//console.log(formdata);
const nav = useNavigate();
const currdata=(JSON.parse(localStorage.getItem("formdata")) || "[]");


useEffect(()=>{
  console.log("second ! ")
  Object.keys(formdata).forEach(key => {
    formdata[key] = currdata[key];
  });
},[]);

const [data,setdata]=useState(currdata);

useEffect(()=>{
  console.log("first !")
  localStorage.setItem("formdata",JSON.stringify(formdata));
});


const handlesubmit= async(e)=>{
   await axios.post("http://localhost:8080/create",{
        Name:formdata.Name,
        PhoneNumber:formdata.PhoneNumber,
        age:formdata.age,
        fathersname:formdata.fathersname,
        occupation:formdata.occupation,
        martialstatus:formdata.martialstatus,
        Gender:formdata.Gender,
        Email:formdata.Email,
        address:formdata.address,
        BusinessName:formdata.BusinessName,
        GST_NO:formdata.GST_NO,
        city:formdata.city,
        state:formdata.state,
        zip:formdata.zip,
        annunalincome:formdata.annunalincome,
        Loan_amount:formdata.Loan_amount,
        interest_rate:formdata.interest_rate,
        loantenure:formdata.loantenure
    })
    .then(response=>{
      alert("form submitted");
        localStorage.clear();
    });
} 
   
    return( //form to collect data
    <div className="main">
    <form onSubmit={handlesubmit}>
  <div class="form-row">
    <div class="form-group ">
      <label for="annunalincome">Annunal Income</label>
      <input type="Number" class="form-control" name="annunalincome" placeholder="Annunal Income" defaultValue={data.annunalincome}  autoComplete="off" onChange={handlechange} />
    </div>
  </div>
  <div class="form-group">
    <label for="Loan amount">Loan Amount</label>
    <input type="Number" class="form-control" name="Loan_amount" placeholder="Loan amount" defaultValue={data.Loan_amount} autoComplete="off" onChange={handlechange}/>
  </div>
  
  <div class="form-row">
    <div class="form-group ">
      <label for="interest_rate">Interest Rate</label>
      <input type="Number" class="form-control" name="interest_rate" placeholder="Interest Rate in percentage" defaultValue={data.interest_rate}  autoComplete="off" onChange={handlechange} />
    </div>
    <div class="form-group ">
      <label for="loantenure">loan tenure</label>
      <input type="Number" class="form-control" name="loantenure" placeholder="Loan Tenure in year" defaultValue={data.loantenure} autoComplete="off" onChange={handlechange} />
    </div>
   
  </div>
  
  <button type="submit" class="btn btn-primary">Submit</button>
</form>

    </div>
    )
}

export default Third_Page;