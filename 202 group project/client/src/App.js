import React from "react";
import { Routes, Route } from "react-router-dom";
import Edit from "./Edit";
import './App.css';

import Passenger from "./Passenger";
import Arr from "./Arr";
import Airline from "./Airline";
import Terminals from "./Terminals.js";
import Baggage from "./Baggage.js";
import List from "./List.js";
import Login from "./Login";
import List1 from "./List1";
import Editd from './Editd';
import Airplane from "./Airplane";
import Terminaldep from "./Terminaldep";
import Baggassi from "./Baggassi";

function App() {
  return (

    <div className="App">
      <img src="sitelogo.jpeg" alt="" className="logo" />
      <h1 className="login_heading">Welcome to AirFly</h1>

      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route exact path="/Passenger" element={<Passenger />} />
        <Route path="/Arr" element={<Arr />} />
        <Route path="/Baggage" element={<Baggage />} />
        <Route path="/List" element={<List />} />
        <Route path="/List1" element={<List1 />} />
        <Route path="/Terminals" element={<Terminals />} />
        <Route path="/Terminaldep" element={<Terminaldep />} />
        <Route path="/Airline" element={<Airline />} />
        <Route path="/Edit" element={<Edit />} />
        <Route path="/Editd" element={<Editd />} />
        <Route path="/Airplane" element={<Airplane />} />
        <Route path="/Belt" element={<Baggassi />} />
      </Routes>
    </div>
  );
}
export default App;
