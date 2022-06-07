import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/firstpage.css"

 const currdata=(JSON.parse(localStorage.getItem("formdata")) || "[]");


function First_Page({handlechange,formdata}){
  
  useEffect(()=>{
    Object.keys(formdata).forEach(key => {
      formdata[key] = currdata[key];
    });
  },[])   
  

  const [data,setdata]=useState(currdata);
  const nav=useNavigate();

const handlesubmit=(e)=>{
    nav("/second_page")
}  



useEffect(()=>{
    localStorage.setItem("formdata",JSON.stringify(formdata));
  });

  
  
    return( //form to collect data
    <div className="main">
  <div class="form-row">
    <div class="form-group ">
      <label for="Name">Name</label>
      <input type="text" class="form-control" name="Name" placeholder="Name"  autoComplete="off" defaultValue={data.Name}  required onChange={handlechange} />
    </div>
    <div class="form-group ">
      <label for="fathersname">Father's Name</label>
      <input type="text" class="form-control" name="fathersname" placeholder="Father's Name"   autoComplete="off" defaultValue={data.fathersname}  required onChange={handlechange} />
    </div>


  </div>
  <div class="form-group">
    <label for="PhoneNumber">Phone Number</label>
    <input type="text" class="form-control" minLength="10" maxLength="10" name="PhoneNumber" placeholder="Phone Number" defaultValue={data.PhoneNumber}   autoComplete="off" required onChange={handlechange}/>
  </div>
  
  
  <div class="form-row">
    <div class="form-group ">
      <label for="age">Age</label>
      <input type="Number" class="form-control" name="age" placeholder="AGE" required  autoComplete="off" defaultValue={data.age} onChange={handlechange} />
    </div>
    <div class="form-group ">
    <label for="Email">Email</label>
      <input type="Email" class="form-control" name="Email" placeholder="Email" required  autoComplete="off" defaultValue={data.Email} onChange={handlechange} />
    </div>
    <div class="form-group ">
      <label for="Gender">Gender</label>
      <select name="Gender" onChange={handlechange}>
              <option defaultValue={data.Gender} selected disabled hidden>Select an Option</option>
    <option value="Male">Male</option>
    <option value="Female">Female</option>
    <option value="Other">Other</option>
  </select>
  <div class="form-group ">
      <label for="occupation">Occupation</label>
      <input type="text" class="form-control" name="occupation" placeholder="Occupation"   autoComplete="off" defaultValue={data.occupation} required onChange={handlechange} />
    </div>
    <div class="form-group ">
    <label for="martialstatus">Martial Status</label>
      <select name="martialstatus" onChange={handlechange}>
      <option defaultValue={data.martialstatus} selected disabled hidden>Select an Option</option>
    <option value="Married">Married</option>
    <option value="Unmarried">Unmarried</option>
  </select>
      </div>
    </div>
  </div>
  
  <button  onClick={handlesubmit} class="btn btn-primary">NEXT</button>

    </div>
    )
}

export default First_Page;