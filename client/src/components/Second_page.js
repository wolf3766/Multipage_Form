import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import "../styles/firstpage.css"

function Second_Page({handlechange,formdata}){

const nav=useNavigate();

const currdata=(JSON.parse(localStorage.getItem("formdata")) || "[]");
console.log("current : ",currdata);

useEffect(()=>{
  console.log("second : ")
  Object.keys(formdata).forEach(key => {
    formdata[key] = currdata[key];
  });
},[]);

//console.log("formdata : ",formdata);
const [data,setdata]=useState(currdata);

const handlesubmit=(e)=>{
    nav("/third_page")
}



useEffect(()=>{
  console.log("first ! ");
  localStorage.setItem("formdata",JSON.stringify(formdata));
});

    return( 
    <div className="main">
  <div class="form-row">
    <div class="form-group ">
      <label for="BuinessName">Business Name</label>
      <input type="text" class="form-control" name="BusinessName" placeholder="Name" defaultValue={data.BusinessName} autoComplete="off" required onChange={handlechange} />
    </div>
  </div>
  <div class="form-group">
    <label for="inputAddress">Address</label>
    <input type="text" class="form-control" name="address" placeholder="address" defaultValue={data.address} autoComplete="off"  required onChange={handlechange}/>
  </div>
  
  <div class="form-row">
    <div class="form-group ">
      <label for="GST_NO">GST NO</label>
      <input type="Number" class="form-control" name="GST_NO" placeholder="GST Number" defaultValue={data.GST_NO}  autoComplete="off"  required  onChange={handlechange} />
    </div>
    <div class="form-group ">
      <label for="city">City</label>
      <input type="text" class="form-control" name="city" placeholder="City"  autoComplete="off" defaultValue={data.city}  required  onChange={handlechange} />
    </div>
    <div class="form-group ">
    <label for="inputState">State</label>
      <input type="text" class="form-control" name="state"  placeholder="State" autoComplete="off" defaultValue={data.state}  required onChange={handlechange} />
    </div>
    <div class="form-group ">
      <label for="inputZip">Zip</label>
      <input type="Number" class="form-control" name="zip"  placeholder="ZIP" autoComplete="off"  defaultValue={data.zip} required  onChange={handlechange} />
    </div>
  </div>
  
  <button  onClick={handlesubmit}  class="btn btn-primary">next</button>

    </div>
    )
}

export default Second_Page;