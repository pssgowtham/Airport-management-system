import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

import axios from "axios";
import React, { useEffect, useState } from "react";
  
// function createData(id, arrival, carrier, flight, gate, terminal, status) {
//  return { id, arrival, carrier, flight, gate, terminal, status };
// }
  
// const rows = [];
  
const DynamicTable = () => {
const [List, setList] = useState([]);
  
//  useEffect(() => {
//    axios
//      .get("http://35.90.111.36:5010/arrivalTable")
//      .then(res => {
//       var temp = res.data
//       setList(res.data);
//       console.log(list);
//      })
//      .catch((error) => {
//        console.log("here");
//      });
//  }, []);

useEffect( () => {
  const load =  async () => {
   console.log("in customer order")

   const response =  await axios.get('http://35.90.111.36:5010/arrivalTable')

   console.log("orders", response.data)
   setList(response.data)
   }
   load()
 }, [])

//  console.log("here",List[0].status);
 return (
  <div style={{
    display: "flex",
    paddingTop: "80px",
    justifyContent: "center",
    alignItems: "center"
}}>
   <TableContainer component={Paper} style={{ width: 1000 }}>
     <Table aria-label="simple table" stickyHeader>
       <TableHead>
         <TableRow>
           <TableCell align="center">Id</TableCell>
           <TableCell align="center">Arrival</TableCell>
           <TableCell align="center">Carrier</TableCell>
           <TableCell align="center">Flight</TableCell>
           <TableCell align="center">Gate</TableCell>
           <TableCell align="center">Terminal</TableCell>
          <TableCell align="center">Time</TableCell>
           <TableCell align="center">Status</TableCell>
         </TableRow>
       </TableHead>
       <TableBody>
         {List.map((row) => (
           <TableRow key={row.id}>
             {/* <TableCell component="th" scope="row">
               {row.name}
             </TableCell> */}
             <TableCell align="center">{row.id}</TableCell> 
             <TableCell align="center">{row.arrival}</TableCell>
             <TableCell align="center">{row.carrier}</TableCell>
             <TableCell align="center">{row.flight}</TableCell>
              <TableCell align="center">{row.gate}</TableCell>
             <TableCell align="center">{row.terminal}</TableCell>
             <TableCell align="center">{row.time}</TableCell>
              <TableCell align="center">{row.status}</TableCell>
           </TableRow>
         ))}
       </TableBody>
     </Table>
   </TableContainer>
   </div>
 );
}

export default DynamicTable;