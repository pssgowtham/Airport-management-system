import axios from "axios";
import React from "react";
// import {useNavigate} from 'react-router-dom';
import { useState } from 'react';
function Home() {
  const [email, setemail] = useState("");;
  const [password, setpassword] = useState("");


  // const navigate=useNavigate();
  // function handleClick(){
  //    navigate("/Passenger")
  // }

  // const Register=()=>{
  //   axios.post("http://35.90.111.36:4000/signin",{
  //     username:email,
  //     password:password,
  //   })
  //   .then((response)=>{
  //     if(response.data.message){
  //  setloginstatus(response.data.message)
  //     }
  //     else{
  //       setloginstatus(response.data[0].username)
  //     }
  //   });
  // };

  let data = {
    username: email,
    password: password
  }

  const register = async (e) => {
    
    console.log(data)
    await axios.post("http://35.90.111.36:5010/signin", data).then(res => console.log(res));
  }


  return (
    <div className="loginmain">

      <h1 className="login_heading">Log In to AirFly</h1>
      <div className="form">
        <h1>Sign In Form</h1>
        <form onSubmit={register} className="login-form">
          <input type="email" name="email" onChange={(e) =>  setemail(e.target.value) } placeholder="email" required />
          <input type="password" name="password" onChange={(e) =>  setpassword(e.target.value) } placeholder="password" required />
          <button type="submit"> log in </button>
        </form>
      </div>
    </div>

  )
}
export default Home;