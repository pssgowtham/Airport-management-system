import React from 'react'
import { useState } from 'react'
import axios from 'axios';

export default function Editd() {
  const [arrival, setarrival] = useState("");
  const [carrier, setcarrier] = useState("");
  const [flight, setflight] = useState("");
  const [terminal, setterminal] = useState("");
  const [time, settime] = useState("");
  const [gate, setgate] = useState("");
  const [dell, setdelete] = useState("");

  let data = {
    from: arrival,
    to: carrier,
    flight: flight,
    departure: terminal,
    arrival: gate,
    belt: time
  }
  const Add = async (e) => {
    e.preventDefault();
    console.log(data)
    await axios.post("http://35.90.111.36:5010/baggaged", data).then(res => {
      let data = res.data;
      console.log(res.data)
      if (data === "record inserted") {
        alert("Record Inserted");
      }
      else {
        alert("Belt already assigned")
      }
    })
  }

  let del = {
    id: dell,
  }
  const Delete = async (e) => {
    e.preventDefault();
    console.log(del)
    await axios.post("http://35.90.111.36:5010/delbag", del).then(res => {
      let data = res.data;
      console.log(res.data)
      if (data === "Belt is Deleted and Free for Use") {
        alert("Belt is Deleted and Free for Use");
      }
      else {
        alert("Id doesnot exist")
      }
    })
  }

  return (
    <div className='ADD_DEL'>
      {/* ADD/ */}
      <form onSubmit={Add} className="add-del" data-aos="zoom-out-right">
        <h1>ADD Data of Baggage</h1>

        <input type="text" onChange={(e) => setarrival(e.target.value)} name="from" placeholder="From" required />
        <input type="text" onChange={(e) => setcarrier(e.target.value)} name="to" placeholder="To" required />
        <input type="text" onChange={(e) => setflight(e.target.value)} name="flight" placeholder="Flight" required />
        <label className='bagg-lab'> <strong>Departure:</strong></label>
        <input type="time" onChange={(e) => setterminal(e.target.value)} name="departure" placeholder="Departure" required />
        <label className='bagg-lab'> <strong>Arrival:</strong></label>
        <input type="time" onChange={(e) => setgate(e.target.value)} name="arrival" required />

        <input type="text" onChange={(e) => settime(e.target.value)} name="belt" placeholder="Belt" required />


        <button type='submit' className="ar-btn">Add</button>
      </form>
      {/* DElete */}
      <form className='del' onSubmit={Delete} data-aos="zoom-out-left">
        <h1>Delete Data of Baggage</h1>
        <input type="number" name="id" onChange={(e) => setdelete(e.target.value)} placeholder="Enter Id of Baggage" required />
        <button type='submit' className="ar-btn">Delete</button>
      </form>

    </div>
  )
}