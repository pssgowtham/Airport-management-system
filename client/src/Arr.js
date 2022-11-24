import axios from 'axios';
import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';

function Arr() {
  const navigate = useNavigate();
  const [arrival, setarr] = useState("n");
  const [departure, setdeparture] = useState("a");




  const handleChange1 = (event) => {
event.preventDefault();
    setarr(event.target.value);

  };

  const handleChange2 = (event) => {
    event.preventDefault();
    setdeparture(event.target.value);
  };

  let handleSubmit1 = async (e) => {
    e.preventDefault();
    console.log('hello i am running')
    e.preventDefault();
    await axios.post('http://35.90.111.36:5010/arrivaln', { n: arrival }).then(res=>console.log(res.data)).then(navigate('/List'))
  }
  let handleSubmit2 = async (e) => {
    console.log('hello i am running')
    e.preventDefault();
    await axios.post('http://35.90.111.36:5010/departuren', { n: departure }).then(navigate('/List1'))
  }


  console.log(arrival)
  const toDay= new Date().toISOString().substring(0, 10);

  return (

    <div className="Arr">
     

     <div className="ar" data-aos="fade-up-right"> 
        <h1>Arrival
        </h1>
        <label className="h2">Date : </label>

        <input className='drop' type="date" defaultValue={toDay} />
        <label className="h2">Duration: </label>
        <select className="drop" value={arrival} onChange={handleChange1} >
          <option value="n">1 HOUR</option>
          <option value="t">2 HOUR</option>
          <option value="f">4 HOUR</option>
        </select>
        <br></br>
        <button onClick={handleSubmit1} className="ar-btn">submit</button>

      </div> 

      <div className="ar" data-aos="fade-up-left">
        <h1>Departure
        </h1>
        <label className="h2" >Date : </label>

        <input className='drop' type="date" defaultValue={toDay} />
        <label className="h2">Duration : </label>
        <select className="drop" value={departure} onChange={handleChange2} >
          <option value="a">1 HOUR</option>
          <option value="b">2 HOUR</option>
          <option value="c">4 HOUR</option>
        </select>
        <br></br>
        <button onClick={handleSubmit2} className="ar-btn">submit</button>
      </div>

    </div>
  )
}
export default Arr;