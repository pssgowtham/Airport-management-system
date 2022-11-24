// import axios from "axios";
// import React, { useEffect, useState } from "react";


// const Baggage = () => {
  
//   // const [Datx, setDatx] = useState([]);
//   const [filteredPosts, setFilteredPosts] = useState([]);

//   // useEffect( () => {
//   //   async function check() {
//   //   const temp =  await axios.get('http://35.90.111.36:5010/getbelt')
//   //   // then(res => res.data).then(data => setDatx(data)
//   //   console.log(temp.data)
//   //   setFilteredPosts(temp.data)
//   //   }
//   // }, [])

//   // 
//   useEffect( () => {
//    const load =  async () => {
//     console.log("in customer order")

//     const response =  await axios.get('http://35.90.111.36:5010/getbelt')

//     console.log("orders", response.data)
//     setFilteredPosts(response.data)
//     }
//     load()
//   }, [])


//   // 
  

//   console.log(filteredPosts)
//   return (
//     <div className="Baggage" >
//       <table className="arr-dep" >
//         <tr>
//           <th>#Id</th>
//           <th>From</th>
//           <th>To</th>
//           <th>Flight</th>
//           <th>Departure</th>
//           <th>Arrival</th>
//           <th>Belt</th>
//         </tr>
//       </table>

//       {
//         filteredPosts.map((salm) => {
//           return (
//             <table className="arr-dep" >
//               <tr>
//                 <td>{salm.id}</td>
//                 <td>{salm.from}</td>
//                 <td>{salm.to}</td>
//                 <td>{salm.flight}</td>
//                 <td>{salm.departure}</td>
//                 <td>{salm.arrival}</td>
//                 <td>{salm.belt}</td>

//               </tr>
//             </table>
//           )
//         })
//       }

//     </div>
//   )
// }
// export default Baggage;


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

   const response =  await axios.get('http://35.90.111.36:5010/getbelt')

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
           <TableCell align="center">From</TableCell>
           <TableCell align="center">To</TableCell>
           <TableCell align="center">Flight</TableCell>
           <TableCell align="center">Departure</TableCell>
           <TableCell align="center">Arrival</TableCell>
          <TableCell align="center">Belt</TableCell>
         </TableRow>
       </TableHead>
       <TableBody>
         {List.map((row) => (
           <TableRow key={row.id}>
             {/* <TableCell component="th" scope="row">
               {row.name}
             </TableCell> */}
             <TableCell align="center">{row.id}</TableCell> 
             <TableCell align="center">{row.from}</TableCell>
             <TableCell align="center">{row.to}</TableCell>
             <TableCell align="center">{row.flight}</TableCell>
              <TableCell align="center">{row.departure}</TableCell>
             <TableCell align="center">{row.arrival}</TableCell>
              <TableCell align="center">{row.belt}</TableCell>
           </TableRow>
         ))}
       </TableBody>
     </Table>
   </TableContainer>
   </div>
 );
}

export default DynamicTable;