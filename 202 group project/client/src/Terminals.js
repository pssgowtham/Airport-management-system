import React from "react";
import { useState } from "react";
import axios from 'axios';
function Terminals() {
  // TERMINAL 1
  const [arrivalA, setarrA] = useState("A1");
  const [arrivalAE, setarrAE] = useState("E");
  const handleAChange1 = (event) => {
    event.preventDefault();
    setarrA(event.target.value);
  };
  const handleAChange2 = (event) => {
    event.preventDefault();
    setarrAE(event.target.value);
  };
  let data1 = {
    gate: arrivalA,
    enable: arrivalAE
  }
  let handleSubmit1 = async (e) => {
    e.preventDefault();
    await axios.post(' http://35.90.111.36:5010/A1', data1).then(res => res.msg).then(alert("Gate Edited successfuly"))
  }

  // Terminal 1 end------------------------------------------------------------------------------------


  const [arrivalB, setarrB] = useState("B1");
  const [arrivalBE, setarrBE] = useState("e");

  let data2 = {
    gate: arrivalB,
    enable: arrivalBE
  }
  const handleAChange4 = (event) => {
    event.preventDefault();
    setarrBE(event.target.value);
  };
  let handleSubmit2 = async (e) => {
    e.preventDefault();
    console.log("im running");
    e.preventDefault();
    await axios.post(' http://35.90.111.36:5010/B1', data2).then(res => res.msg).then(alert("Gate Edited successfuly"))
  }

  const handleAChange3 = (event) => {
    event.preventDefault();
    setarrB(event.target.value);
  };
  // Terminal 2 end------------------------------------------------------------------------------------
  const [arrivalC, setarrC] = useState("C1");
  const [arrivalCE, setarrCE] = useState("en");

  let data3 = {
    gate: arrivalC,
    enable: arrivalCE
  }
  const handleAChange6 = (event) => {
    event.preventDefault();
    setarrCE(event.target.value);
  };
  let handleSubmit3 = async (e) => {
    e.preventDefault();
    console.log("im running");
    e.preventDefault();
    await axios.post(' http://35.90.111.36:5010/C1', data3).then(res => res.msg).then(alert("Gate Edited successfuly"))
  }

  const handleAChange5 = (event) => {
    event.preventDefault();
    setarrC(event.target.value);
  };

  return (



    <div className="mainterminal">

      <form onSubmit={handleSubmit1} className="formt" >
        <label className="term">Terminal 1: </label>
        <select className="drop2" value={arrivalA} onChange={handleAChange1} >
          <option value="A1">A1</option>
          <option value="A2">A2</option>
          <option value="A3">A3</option>
          <option value="A4">A4</option>
          <option value="A5">A5</option>
          <option value="A6">A6</option>
          <option value="A7">A7</option>
          <option value="A8">A8</option>
          <option value="A9">A9</option>
          <option value="A10">A10</option>
          <option value="A11">A11</option>
          <option value="A12">A12</option>
          <option value="A13">A13</option>
          <option value="A14">A14</option>
          <option value="A15">A15</option>
          <option value="A16">A16</option>
          <option value="A17">A17</option>
          <option value="A18">A18</option>
          <option value="A19">A19</option>
          <option value="A20">A20</option>
          <option value="A21">A21</option>
          <option value="A22">A22</option>
          <option value="A23">A23</option>
          <option value="A24">A24</option>
          <option value="A25">A25</option>
          <option value="A26">A26</option>
          <option value="A27">A27</option>
          <option value="A28">A28</option>
          <option value="A29">A29</option>
          <option value="A30">A30</option>
          <option value="A31">A31</option>
          <option value="A32">A32</option>          
        </select>
        <label className="term" > Position: </label>
        <select className="drop2" value={arrivalAE} onChange={handleAChange2} >
          <option value="E">Enable</option>
          <option value="D">Disable</option>
        </select>
        <button className="term-btn" type="submit">submit</button>
      </form>


      <form onSubmit={handleSubmit2} className="formt">
        <label className="term">Terminal 2: </label>
        <select className="drop2" value={arrivalB} onChange={handleAChange3} >
          <option value="B1">B1</option>
          <option value="B2">B2</option>
          <option value="B3">B3</option>
          <option value="B4">B4</option>
          <option value="B5">B5</option>
          <option value="B6">B6</option>
          <option value="B7">B7</option>
          <option value="B8">B8</option>
          <option value="B9">B9</option>
          <option value="B10">B10</option>
          <option value="B11">B11</option>
          <option value="B12">B12</option>
          <option value="B13">B13</option>
          <option value="B14">B14</option>
          <option value="B15">B15</option>
          <option value="B16">B16</option>
          <option value="B17">B17</option>
          <option value="B18">B18</option>
          <option value="B19">B19</option>
          <option value="B20">B20</option>
          <option value="B21">B21</option>
          <option value="B22">B22</option>
          <option value="B23">B23</option>
          <option value="B24">B24</option>
          <option value="B25">B25</option>
          <option value="B26">B26</option>
          <option value="B27">B27</option>
          <option value="B28">B28</option>
          <option value="B29">B29</option>
          <option value="B30">B30</option>
          <option value="B31">B31</option>
          <option value="B32">B32</option>
        </select>
        <label className="term" > Position: </label>
        <select className="drop2" value={arrivalBE} onChange={handleAChange4} >
          <option value="e">Enable</option>
          <option value="d">Disable</option>
        </select>
        <button className="term-btn" type="submit">submit</button>
      </form>



      <form onSubmit={handleSubmit3} className="formt" >
        <label className="term">Terminal 3: </label>
        <select className="drop2" value={arrivalC} onChange={handleAChange5} >
          <option value="C1">C1</option>
          <option value="C2">C2</option>
          <option value="C3">C3</option>
          <option value="C4">C4</option>
          <option value="C5">C5</option>
          <option value="C6">C6</option>
          <option value="C7">C7</option>
          <option value="C8">C8</option>
          <option value="C9">C9</option>
          <option value="C10">C10</option>
          <option value="C11">C11</option>
          <option value="C12">C12</option>
          <option value="C13">C13</option>
          <option value="C14">C14</option>
          <option value="C15">C15</option>
          <option value="C16">C16</option>
          <option value="C17">C17</option>
          <option value="C18">C18</option>
          <option value="C19">C19</option>
          <option value="C20">C20</option>
          <option value="C21">C21</option>
          <option value="C22">C22</option>
          <option value="C23">C23</option>
          <option value="C24">C24</option>
          <option value="C25">C25</option>
          <option value="C26">C26</option>
          <option value="C27">C27</option>
          <option value="C28">C28</option>
          <option value="C29">C29</option>
          <option value="C30">C30</option>
          <option value="C31">C31</option>
          <option value="C32">C32</option>
        </select>
        <label className="term" > Position: </label>
        <select className="drop2" value={arrivalCE} onChange={handleAChange6} >
          <option value="en">Enable</option>
          <option value="dis">Disable</option>
        </select>
        <button className="term-btn" type="submit">submit</button>
      </form>

    </div>



  )
}
export default Terminals;