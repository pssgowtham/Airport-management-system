import React, { useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
// import Alert from '@mui/material/Alert';
// import AlertTitle from '@mui/material/AlertTitle';


function Login() {
  const navigate = useNavigate();
  const [email, setemail] = useState("");;
  const [password, setpassword] = useState("");

  let data = {
    username: email,
    password: password
  }
  const register = async (e) => {
    e.preventDefault();
    console.log(data)
    await axios.post("http://35.90.111.36:5010/signin", data).then(res => {
      let data = res.data;
      console.log(res.data)
      if (res.data === "Incorrect Password" || res.data === "Incorrect Email Address") {
        alert("Invalid username or password");

      }
      else {
        data.forEach(element => {
          if (element.type === "y") {
            navigate('/Passenger')
          }
          if (element.type === "z") {
            navigate('/Airplane')
          }
          if (element.type === "x") {
            navigate('/Airline')
          }

        });
      }
    });
  }


  return (
    <div className="loginmain" data-aos="zoom-in-left">
      <div className="form">
        <h1>Sign In Form</h1>
        <form onSubmit={register} className="login-form">
          <input type="email" name="email" onChange={(e) => setemail(e.target.value)} placeholder="email" required />
          <input type="password" name="password" onChange={(e) => setpassword(e.target.value)} placeholder="password" required />
          <button type="submit"> log in </button>
        </form>
      </div>
    </div>
  )
}

export default Login