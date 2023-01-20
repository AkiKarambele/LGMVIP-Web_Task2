import React, {  useState } from "react";
import Spinner from './Spinner';
import Users from "./Users";

import './App.css';


function App() {
  const [user , setuser] = useState([]);
  const [loading,setLoading] = useState(false);
  const getdata = async () =>{
    try{
setLoading(true);
    let fetchRes = await fetch("https://reqres.in/api/users?page=1");
    let res = await fetchRes.json();
    setLoading(true);
    setuser(res.data);
 
    setLoading(true);
    setLoading(false);
  }
    
    catch(e){
      console.log(e);
    }
  }


 
 const load = () =>{
  return getdata();
 }

  return (
    <>
      
      <header className="header">
        <div className="logo">LetsGrow</div>

        <nav id="navbar" className="navbar">
           
              
                  
        </nav>

        <input type="button" onClick={load} value ="Get Users"/>
        
      </header>
    <div className="list">
      <h1 className="middle">Users</h1>
   
     {
      loading? <Spinner/> :  <div className="box">
      {
       user.map((itm)=>{
        console.group(itm.id);
       return <Users key={itm.id} id={itm.id} email={itm.email} name={itm.first_name} lname={itm.last_name}  av={itm.avatar}/>
       })
      }
     
     </div>
     }
     </div>
    </>
  );
}

export default App;

