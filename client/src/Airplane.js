import React from 'react'
import {useNavigate} from 'react-router-dom';
export default function Airplane() {
   
  const nav=useNavigate();

  function handleClick() {
    nav("/Arr")}
     function handleClick1(){
       nav("/Baggage")}
      function handleClick2(){
        nav("/Belt")}
        function handleClick3(){
          nav("/Terminals")}
          function handleClick4(){
            nav("/Terminaldep")}
  return (
    <div className='Passenger'>
       <h2>Airport Employee</h2>
       <button  onClick={handleClick} className="third">Arrival Details</button> 
       <button  onClick={handleClick1} className="third">Baggage Details</button> 
      <button  onClick={handleClick2} className="third">Assign Belt</button>
      <button  onClick={handleClick3} className="third">Enable/Disable Gate Arrival</button>
      <button  onClick={handleClick4} className="third">Enable/Disable Gate Departure</button>
      
</div>
  )
}
