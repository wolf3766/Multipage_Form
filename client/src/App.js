import {Routes,Route,BrowserRouter} from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';
import First_page from './components/First_Page';
import Second_Page from './components/Second_page';
import Third_Page from "./components/Third_page";
import Navbarcomp from "./components/navbarcomp";
import {useState} from "react"


function App() {

  const [formdata,setformdata]=useState({
    "Name":"",
    "PhoneNumber":"",
    "fathersname":"",
    "age":"",
    "occupation":"",
    "martialstatus":"",
    "Gender":"",
    "Email":"",
    "address":"",
    "BusinessName":"",
    "GST_NO":"",
    "city":"",
    "state":"",
    "zip":"",
    "annunalincome":"",
    "Loan_amount":"",
    "interest_rate":"",
    "loantenure":"",
});

const handlechange=(e)=>{
  setformdata({
    ...formdata,
    [e.target.name]:e.target.value
  })
}


  return (
    <div className='App'>
      <Navbarcomp />
    <BrowserRouter>
    <Routes>

    <Route path="/" element={<First_page handlechange={handlechange}   formdata={formdata} />} />
    <Route path="/first_page" element={<First_page handlechange={handlechange}  formdata={formdata}  />} />
    <Route path="/second_page" element={<Second_Page handlechange={handlechange} formdata={formdata}  />} />
    <Route path="/third_page" element={<Third_Page formdata={formdata} handlechange={handlechange}  />} />
    
   
    </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App;
