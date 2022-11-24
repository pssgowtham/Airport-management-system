import React from "react";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';


function Passenger() {
  const nav = useNavigate();
  function handleClick() {
    nav("/Arr")
  }
  let handleClick2 = async () => {
    console.log('hello i am running')

    await axios.post(' http://35.90.111.36:5010/bagg').then(res => console.log(res.data)).then(nav('/Baggage'))
  }
  return (

    <div className="Passenger" data-aos="zoom-out-down">
      <h2>Passenger</h2>
      <button onClick={handleClick} className="third">Flight Details</button>
      <button onClick={handleClick2} className="third">Baggage Details</button>
    </div>
  )
}
export default Passenger;
