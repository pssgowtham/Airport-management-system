import express from "express";
const app = express();
import bodyParser from "body-parser";
import cors from 'cors';
import mysql from "mysql";
const Port = 5010;
app.use(cors());



app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }))
app.use(bodyParser.json({ limit: '50mb' }));

//let mysql1 = require('mysql');

const db= mysql.createConnection({
    host:"cmpe275.cn6vk5ewgaqy.us-east-1.rds.amazonaws.com",
    user:"cmpe275",
    password:"cmpe275$",
    database:"mysqlnode"
})


db.connect(function (err) {
    if (err) throw err;
    console.log("Connected!");
});

app.post('/signin', function (request, response, next) {
    let data = request.body
    console.log(data)
    var user_email_address = data.username;

    var user_password = data.password;


    if (user_email_address && user_password) {
        let query = `
        SELECT * FROM signin 
        WHERE email = "${user_email_address}"
        `;

        db.query(query, function (error, data) {

            if (data.length > 0) {
                for (var count = 0; count < data.length; count++) {
                    if (data[count].password == user_password) {
                        response.send(data);


                    }
                    else {
                        response.send('Incorrect Password');
                    }
                }
            }
            else {
                response.send('Incorrect Email Address');
            }
            response.end();
        });
    }
    // else {
    //     response.send('Please Enter Email Address and Password Details');
    //     successful = "Login Fail";
    //     response.end();
    // }

});
app.get('/signin', (req, res) => {
    res.send({ successful });
})


// -------------------------------------------------------------------------------------------------------------

let tableData;

app.post('/arrivaln', (req, res) => {
    let data = req.body;
    if (data.n === 'n') {
        const q = "SELECT * FROM arrivaln";
        db.query(q, (err, data) => {
            if (err) return res.json(err)
            return tableData = data;
        })
    }
    else if (data.n === "t") {

        const q = "SELECT * FROM arrivalt";
        db.query(q, (err, data) => {
            if (err) return res.json(err)
            else {
                return tableData = data;
            }
        }
        )
    }
    else if (data.n === "f") {
        const q = "SELECT * FROM Arrival";
        db.query(q, (err, data) => {
            if (err) return res.json(err)
            return tableData = data;

        })
    }
    else {
        console.log('no match')
    }

})


app.get('/arrivalTable', (req, res) => {
    res.send(tableData);
})

// ------------------------------------------------------------------------------------------------------
let depData;
app.post('/departuren', (req, res) => {
    let data = req.body;
    if (data.n === 'a') {
        const q = "SELECT * FROM departuren";
        db.query(q, (err, data) => {
            if (err) return res.json(err)
            return depData = data;
        })
    }
    else if (data.n === "b") {

        const q = "SELECT * FROM departuret";
        db.query(q, (err, data) => {
            if (err) return res.json(err)
            return depData = data;
        })
    }
    else if (data.n === "c") {
        console.log("im running")
        const q = "SELECT * FROM departuref";
        db.query(q, (err, data) => {
            if (err) return res.json(err)
            return depData = data;
        })
    }

    else {
        console.log('no match')
    }

})

app.get('/departureTable', (req, res) => {
    res.send(depData);
})
// --------------------------------------------------------------------------------------------------------
// ADD Arrival

app.post("/adddata", (req, res) => {
    var data = req.body;
    var arrival = data.arr;
    var carrier = data.carr;
    var flight = data.flight;
    var gate = data.gate;

    var terminal = data.term;
    var time = data.time;
    var status = data.status;
    if (data.hour === "n") {

        var q = `INSERT INTO arrivaln ( arrival, carrier, flight, gate, terminal, time, status) VALUES ("${arrival}", "${carrier}", "${flight}","${gate}", "${terminal}", "${time}", "${status}")`;
        db.query(q, function (err, result) {
            if (err) console.log(err);
            if (result) console.log('record inserted into n table');
        });
    }
    else if (data.hour === "t") {
        var q = `INSERT INTO arrivalt ( arrival, carrier, flight, gate, terminal, time, status) VALUES ("${arrival}", "${carrier}", "${flight}","${gate}", "${terminal}", "${time}", "${status}")`;
        db.query(q, function (err, result) {
            if (err) console.log(err);
            if (result) console.log('record inserted into n table');
        });
    }
    else {
        var q = `INSERT INTO Arrival( arrival, carrier, flight, gate, terminal, time, status) VALUES ("${arrival}", "${carrier}", "${flight}","${gate}", "${terminal}", "${time}", "${status}")`;
        db.query(q, function (err, result) {
            if (err) console.log(err);
            if (result) console.log('record inserted into Arrival');
        });
    }

});

app.get('/adddata', (req, res) => {
    res.send({ msg: "Arrival  Flight Data Added Successfully" });
})

//---------------------------------------------------UPDATE ARRIVAL-----------------------------------------------
app.post("/update", (req, res) => {
    let data = req.body;
    let status = data.status;
    let id = data.id;
    let time = data.time;
    let hour = data.hour

    console.log(data);
    if (hour === "n") {
        var n = `UPDATE  arrivaln  SET status = "${status}", time = "${time}" WHERE id = "${id}"`;
        db.query(n, function (err, result) {
            if (err) console.log(err);
            if (result) {
                console.log('record inserted');
                res.send('record inserted')
            }
            else {
                res.send("Wrong Id")
            }

        })
    }
    if (hour === "t") {
        var n = `UPDATE  arrivalt  SET status = "${status}", time = "${time}" WHERE id = "${id}"`;
        db.query(n, function (err, result) {
            if (err) console.log(err);
            if (result) {
                console.log('record inserted');
                res.send('record inserted')
            }
        })
    }
    if (hour === "f") {
        var n = `UPDATE  Arrival  SET status = "${status}", time = "${time}" WHERE id = "${id}"`;
        db.query(n, function (err, result) {
            if (err) console.log(err);
            if (result) {
                console.log('record inserted');
                res.send('record inserted')
            }

        })
    }


})


//----------------------------------------------------------------------------------------------------------------
// Delete Arrival
app.post("/deldata", (req, res) => {
    var data = req.body;
    var id = data.id;
    console.log(data);

    if (data.hour === "n") {
        var q = `DELETE FROM arrivaln WHERE id = "${id}"`;

        db.query(q, function (err, result) {
            if (err) console.log(err);
            if (result) console.log('record deleted successfully');
        })

    }
    else {
        console.log("id doesnot exsit")
        res.send({ msg: "id doesnot exist" })
    }
    if (data.hour === "t") {
        var q = `DELETE FROM arrivalt WHERE id = "${id}"`;

        db.query(q, function (err, result) {
            if (err) console.log(err);
            if (result) console.log('record deleted successfully');
        })

    }
    else {
        console.log("id doesnot exist")
    }
    if (data.hour === "f") {
        var q = `DELETE FROM Arrival WHERE id = "${id}"`;

        db.query(q, function (err, result) {
            if (err) console.log(err);
            if (result) console.log('record deleted successfully');
        })

    }
    else {
        console.log("id doesnt exsit")
    }

})
app.get('/deldata', (req, res) => {

    res.send({ msg: "record deleted successfully" })

})
// ---------------------------------------------------------------------------------------------------

// Add Data departure

app.post("/adddatade", (req, res) => {
    var data = req.body;
    var departure = data.arr;
    var carrier = data.carr;
    var flight = data.flight;
    var gate = data.gate;

    var terminal = data.term;
    var time = data.time;
    var status = data.status;
    if (data.hour === "n") {

        var q = `INSERT INTO departuren ( departure, carrier, flight, gate, terminal, time, status) VALUES ("${departure}", "${carrier}", "${flight}","${gate}", "${terminal}", "${time}", "${status}")`;
        db.query(q, function (err, result) {
            if (err) console.log(err);
            if (result) console.log('record inserted');
        });
    }
    else if (data.hour === "t") {
        var q = `INSERT INTO departuret ( departure, carrier, flight, gate, terminal, time, status) VALUES ("${departure}", "${carrier}", "${flight}","${gate}", "${terminal}", "${time}", "${status}")`;
        db.query(q, function (err, result) {
            if (err) console.log(err);
            if (result) console.log('record inserted');
        });
    }
    else {
        var q = `INSERT INTO departuref ( departure, carrier, flight, gate, terminal, time, status) VALUES ("${departure}", "${carrier}", "${flight}","${gate}", "${terminal}", "${time}", "${status}")`;
        db.query(q, function (err, result) {
            if (err) console.log(err);
            if (result) console.log('record inserted');
        });
    }

});

app.get('/adddatade', (req, res) => {
    if (res) {
        res.send({ msg: "data deleted successfuly" });
    }
    if (!res) {
        res.send({ msg: "Id doesnt exist" })
    }
})

//  -------------------------------------------------------------------------------------------------------
// Delete Departure
app.post("/deldatade", (req, res) => {
    var data = req.body;
    var id = data.id;
    console.log(data);
    if (data.hour === "n") {
        var q = `DELETE FROM departuren WHERE id = "${id}"`;

        db.query(q, function (err, result) {
            if (err) console.log(err);
            if (result) console.log('record deleted successfully');
        })

    }
    else {
        console.log("id dosnt exsit")
        res.send({ msg: "id doesnt exist" })
    }
    if (data.hour === "t") {
        var q = `DELETE FROM departuret WHERE id = "${id}"`;

        db.query(q, function (err, result) {
            if (err) console.log(err);
            if (result) console.log('record deleted successfully');
        })

    }
    else {
        console.log("id dosnt exsit")
    }
    if (data.hour === "f") {
        var q = `DELETE FROM departuref WHERE id = "${id}"`;

        db.query(q, function (err, result) {
            if (err) console.log(err);
            if (result) console.log('record deleted successfully');
        })

    }
    else {
        console.log("id dosnt exsit")
    }

})

// ---------------------------------------UPDATE DEPARTURE--------------------------------------------------------
app.post("/updatedep", (req, res) => {
    let data = req.body;
    let status = data.status;
    let id = data.id;
    let time = data.time;
    let hour = data.hour

    console.log(data);
    if (hour === "n") {
        var n = `UPDATE  departuren  SET status = "${status}", time = "${time}" WHERE id = "${id}"`;
        db.query(n, function (err, result) {
            if (err) console.log(err);
            if (result) {
                console.log('record inserted');
                res.send('record inserted')
            }
            else {
                res.send("Wrong Id")
            }

        })
    }
    if (hour === "t") {
        var n = `UPDATE  departuret  SET status = "${status}", time = "${time}" WHERE id = "${id}"`;
        db.query(n, function (err, result) {
            if (err) console.log(err);
            if (result) {
                console.log('record inserted');
                res.send('record inserted')
            }
        })
    }
    if (hour === "f") {
        var n = `UPDATE  departuref  SET status = "${status}", time = "${time}" WHERE id = "${id}"`;
        db.query(n, function (err, result) {
            if (err) console.log(err);
            if (result) {
                console.log('record inserted');
                res.send('record inserted')
            }

        })
    }


})




// ---------------------------------------------------------------------------------------------------------------
//  Belt data 
//Add Belt

app.post("/baggaged", (req, res) => {
    var data = req.body;
    var q = "INSERT INTO baggage (`from`, `to`, `flight`, `departure`, `arrival`, `belt`) VALUES ('" + data.from + "', '" + data.to + "', '" + data.flight + "', '" + data.departure + "', '" + data.arrival + "', '" + data.belt + "'  );";
    db.query(q, function (err, result) {
        if (err) {
            res.send('Belt Already Assigned')
        };
        if (result) {
            console.log('record inserted');
            res.send('record inserted');
        }

    })
}
)
app.get('/baggaged', (req, res) => {
    res.send({ msg: "data added successfuly" });
})

var bel
app.post('/bagg', (req, res) => {
    let data = req.body;
    const q = "SELECT * FROM baggage";
    db.query(q, (err, data) => {
        if (err) return res.json(err)
        else {
            console.log(data);
            return bel = data;
        }
    })
    
})
app.get('/getbelt', (req, res) => {
    console.log(bel)
    const q = "SELECT * FROM baggage";
    db.query(q, (err, data) => {
        if (err) return res.json(err)
        else {
            console.log(data);
            // return bel = data;
            res.send(data);
        }
    })
    
})

//Delete Belt
app.post("/delbag", (req, res) => {
    var data = req.body;
    var id = data.id;
    console.log(data);

    var q = `DELETE FROM baggage WHERE id = "${id}"`;

    db.query(q, function (err, result) {

        if (result) {

            res.send("Belt is Deleted and Free for Use");
        };

        if (!result) {
            res.send("Id does not exist");
        }
    }
    )
})
app.get('/delbag', (req, res) => {
    if (res) {
        res.send({ msg: "Belt is Deleted and Free for Use" });
    }
    if (!res) {
        res.send({ msg: "Id doesnt exist" })
    }
})

// ---------------------------------------------------------------------------------------------------
// RANDOM GATE
// ---------------------------------------------------------------------------------------------------
//Arrival================---------------------------------------------------------------------------
//Terminal 1-----------------------------------
app.post("/A1", (req, res) => {
    var data = req.body;

    console.log(data)
    console.log("inside A1");

    // A1 If-------------------------------------------
    if (data.gate === "A1") {
        if (data.enable === "D") {
            console.log("inside A1 logic")
            var n = "UPDATE  arrivaln  SET gate = 'A2', status = 'Delayed' WHERE gate = 'A1'";
            db.query(n, function (err, result) {
                if (err) console.log(err);
                if (result) console.log('record inserted');
               // res.send("result");
            })
            var t = "UPDATE  arrivalt  SET gate = 'A3', status = 'Delayed' WHERE gate = 'A1'";
            db.query(t, function (err, result) {
                if (err) console.log(err);
                if (result) console.log('record inserted');
               // res.send("result");

            })
            var t = "UPDATE  Arrival  SET gate = 'A2', status = 'Delayed' WHERE gate = 'A1'";
            db.query(t, function (err, result) {
                if (err) console.log(err);
                if (result) console.log('record inserted');
               // res.send("result");

            })
        }
        else if (data.enable === "E") {

            var n = "UPDATE arrivaln  SET gate = 'A1', status = 'On Time' WHERE gate = 'A2' AND status = 'Delayed'";
            db.query(n, function (err, result) {
                if (err) console.log(err);
                if (result) console.log('record inserted');
              //  res.send(result);

            })
            var t = "UPDATE arrivalt  SET gate = 'A1', status = 'On Time' WHERE gate = 'A3' AND status = 'Delayed'";
            db.query(t, function (err, result) {
                if (err) console.log(err);
                if (result) console.log('record inserted');
               // res.send(result);

            })
            var f = "UPDATE Arrival  SET gate = 'A1', status = 'On Time' WHERE gate = 'A1' AND status = 'Delayed'";
            db.query(f, function (err, result) {
                if (err) console.log(err);
                if (result) console.log('record inserted');
               // res.send(result);


            })
            //res.send(result);
        }
        else {
            console.log("id dosnt exsit")
        }
    }

    // A2 if----------------------------------------------------------------------------------
    //EndpointA2
    else if (data.gate === "A2") {
        if (data.enable === "D") {
            console.log("ENABLING IN LINE 595");
            var n = "UPDATE  arrivaln  SET gate = 'A2', status = 'Delayed' WHERE gate = 'A2'";
            db.query(n, function (err, result) {
                if (err) console.log(err);
                if (result) console.log('record inserted');
                //res.send(result);

            })
            var t = "UPDATE  arrivalt  SET gate = 'A1', status = 'Delayed' WHERE gate = 'A2'";
            db.query(t, function (err, result) {
                res.send(result);
                if (err) console.log(err);
                if (result) console.log('record inserted');
                //res.send(result);

            })
            console.log("enter in line 612");
            var t = "UPDATE  Arrival  SET gate = 'A1', status = 'Delayed' WHERE gate = 'A2'";
            db.query(t, function (err, result) {
                console.log("enter in line 615");
                res.send(result);
                if (err) console.log(err);
                if (result) console.log('record inserted');
            })
        }
        else if (data.enable === "E") {
            console.log("ENABLING IN LINE 619")
            var n = "UPDATE arrivaln  SET gate = 'A2', status = 'On Time' WHERE gate = 'A3' AND status = 'Delayed'";
            db.query(n, function (err, result) {
                if (err) console.log(err);
                if (result) console.log('record inserted');
                //res.send(result);

            })
            var t = "UPDATE arrivalt  SET gate = 'A2', status = 'On Time' WHERE gate = 'A1' AND status = 'Delayed'";
            db.query(t, function (err, result) {
                if (err) console.log(err);
                if (result) console.log('record inserted');
              //  res.send(result);

            })
            var f = "UPDATE Arrival  SET gate = 'A2', status = 'On Time' WHERE gate = 'A2' AND status = 'Delayed'";
            db.query(f, function (err, result) {
                if (err) console.log(err);
                if (result) console.log('record inserted');
               // res.send(result);

            })
        }
        else {
            console.log("id dosnt exsit")
        }
    }
    // A3 if---------------------------------------------------------------------------------------
    else if (data.gate === "A3") {
        if (data.enable === "D") {

            var n = "UPDATE  arrivaln  SET gate = 'A2', status = 'Delayed' WHERE gate = 'A3'";
            db.query(n, function (err, result) {
                if (err) console.log(err);
                if (result) console.log('record inserted');
                res.send(result);

            })
            var t = "UPDATE  arrivalt  SET gate = 'A1', status = 'Delayed' WHERE gate = 'A3'";
            db.query(t, function (err, result) {
                if (err) console.log(err);
                if (result) console.log('record inserted');
                res.send(result);

            })
            var t = "UPDATE  Arrival  SET gate = 'A1', status = 'Delayed' WHERE gate = 'A3'";
            db.query(t, function (err, result) {
                if (err) console.log(err);
                if (result) console.log('record inserted');
                res.send(result);

            })
        }
        else if (data.enable === "E") {

            var n = "UPDATE arrivaln  SET gate = 'A3', status = 'On Time' WHERE gate = 'A2' AND status = 'Delayed'";
            db.query(n, function (err, result) {
                if (err) console.log(err);
                if (result) console.log('record inserted');
                //res.send(result);

            })
            var t = "UPDATE arrivalt  SET gate = 'A3', status = 'On Time' WHERE gate = 'A1' AND status = 'Delayed'";
            db.query(t, function (err, result) {
                if (err) console.log(err);
                if (result) console.log('record inserted');
               // res.send(result);

            })
            var f = "UPDATE Arrival  SET gate = 'A3', status = 'On Time' WHERE gate = 'A1' AND status = 'Delayed'";
            db.query(f, function (err, result) {
                if (err) console.log(err);
                if (result) console.log('record inserted');
               // res.send(result);

            })
        }
        else {
            console.log("id dosnt exsit")
        }
    }
    else {
        console.log("id dosnt exsit")
    }
}
)


// Terminal 1 finishes here -----------------------------------------------------------------------------------\

// Terminal 2 starts here

app.post("/B1", (req, res) => {
    var data = req.body;
    

    // B1 if--------------------------------------------------------------------------------------
    if (data.gate === "B1") {
        if (data.enable === "d") {
            console.log("here line 677")
            var n = "UPDATE  arrivaln  SET gate = 'B2', status = 'Delayed' WHERE gate = 'B1'";
            db.query(n, function (err, result) {
                if (err) console.log(err);
                if (result) console.log('record inserted');
                res.send(result);

            })
            var t = "UPDATE  arrivalt  SET gate = 'B3', status = 'Delayed' WHERE gate = 'B1'";
            db.query(t, function (err, result) {
                if (err) console.log(err);
                if (result) console.log('record inserted');
                res.send(result);

            })
            var t = "UPDATE  Arrival  SET gate = 'B2', status = 'Delayed' WHERE gate = 'B1'";
            db.query(t, function (err, result) {
                if (err) console.log(err);
                if (result) console.log('record inserted');
                res.send(result);
            })
            
        }
        else if (data.enable === "e") {

            var n = "UPDATE arrivaln  SET gate = 'B1', status = 'On Time' WHERE gate = 'B2' AND status = 'Delayed'";
            db.query(n, function (err, result) {
                if (err) console.log(err);
                if (result) console.log('record inserted');
                res.send(result);

            })
            var t = "UPDATE arrivalt  SET gate = 'B1', status = 'On Time' WHERE gate = 'B3' AND status = 'Delayed'";
            db.query(t, function (err, result) {
                if (err) console.log(err);
                if (result) console.log('record inserted');
                res.send(result);

            })
            var f = "UPDATE  Arrival  SET gate = 'B1', status = 'On Time' WHERE gate = 'B2' AND status = 'Delayed'";
            db.query(f, function (err, result) {
                if (err) console.log(err);
                if (result) console.log('record inserted');
                res.send(result);

            })
        }
        else {
            console.log("id dosnt exsit")
        }
    }

    // B2 if----------------------------------------------------------------------------------
    else if (data.gate === "B2") {
        if (data.enable === "d") {

            var n = "UPDATE  arrivaln  SET gate = 'B3', status = 'Delayed' WHERE gate = 'B2'";
            db.query(n, function (err, result) {
                if (err) console.log(err);
                if (result) console.log('record inserted');
                res.send(result)

            })
            var t = "UPDATE  arrivalt  SET gate = 'B1', status = 'Delayed' WHERE gate = 'B2'";
            db.query(t, function (err, result) {
                if (err) console.log(err);
                if (result) console.log('record inserted');
                res.send(result)

            })
            var t = "UPDATE  Arrival  SET gate = 'B1', status = 'Delayed' WHERE gate = 'B2'";
            db.query(t, function (err, result) {
                if (err) console.log(err);
                if (result) console.log('record inserted');
                res.send(result)

            })
        }
        else if (data.enable === "e") {

            var n = "UPDATE arrivaln  SET gate = 'B2', status = 'On Time' WHERE gate = 'B3' AND status = 'Delayed'";
            db.query(n, function (err, result) {
                if (err) console.log(err);
                if (result) console.log('record inserted');
                res.send(result)

            })
            var t = "UPDATE arrivalt  SET gate = 'B2', status = 'On Time' WHERE gate = 'B1' AND status = 'Delayed'";
            db.query(t, function (err, result) {
                if (err) console.log(err);
                if (result) console.log('record inserted');
                res.send(result)

            })
            var f = "UPDATE Arrival  SET gate = 'B2', status = 'On Time' WHERE gate = 'B1' AND status = 'Delayed'";
            db.query(f, function (err, result) {
                if (err) console.log(err);
                if (result) console.log('record inserted');
                res.send(result)

            })
        }
        else {
            console.log("id dosnt exsit")
        }
    }

    // B3 if---------------------------------------------------------------------------------------
    else if (data.gate === "B3") {
        if (data.enable === "d") {

            var n = "UPDATE  arrivaln  SET gate = 'B2', status = 'Delayed' WHERE gate = 'B3'";
            db.query(n, function (err, result) {
                if (err) console.log(err);
                if (result) console.log('record inserted');

            })
            var t = "UPDATE  arrivalt  SET gate = 'B1', status = 'Delayed' WHERE gate = 'B3'";
            db.query(t, function (err, result) {
                if (err) console.log(err);
                if (result) console.log('record inserted');
            })
            var t = "UPDATE  Arrival  SET gate = 'B1', status = 'Delayed' WHERE gate = 'B3'";
            db.query(t, function (err, result) {
                if (err) console.log(err);
                if (result) console.log('record inserted');
                

            })
            res.send(result)
        }
        else if (data.enable === "e") {

            var n = "UPDATE arrivaln  SET gate = 'B3', status = 'On Time' WHERE gate = 'B2' AND status = 'Delayed'";
            db.query(n, function (err, result) {
                if (err) console.log(err);
                if (result) console.log('record inserted');
            })
            var t = "UPDATE arrivalt  SET gate = 'B3', status = 'On Time' WHERE gate = 'B1' AND status = 'Delayed'";
            db.query(t, function (err, result) {
                if (err) console.log(err);
                if (result) console.log('record inserted');

            })
            var f = "UPDATE Arrival  SET gate = 'B3', status = 'On Time' WHERE gate = 'B1' AND status = 'Delayed'";
            db.query(f, function (err, result) {
                if (err) console.log(err);
                if (result) console.log('record inserted');

            })
            res.send(result);
        }
        else {
            console.log("id dosnt exsit")
        }
    }
    else {
        console.log("id dosnt exsit")
    }

})

// Terminal 2 finishes here -----------------------------------------------------------------------------------\

// Terminal 3 starts here

app.patch("/C1", (req, res) => {
    var data = req.body;
    console.log(data)

    // C1 if--------------------------------------------------------------------------------------
    if (data.gate === "C1") {
        console.log(data)
        if (data.enable === "dis") {

            var n = "UPDATE  arrivaln  SET gate = 'C2', status = 'Delayed' WHERE gate = 'C1'";
            db.query(n, function (err, result) {
                if (err) console.log(err);
                if (result) console.log('record inserted');
                res.send(result)

            })
            var t = "UPDATE  arrivalt  SET gate = 'C3', status = 'Delayed' WHERE gate = 'C1'";
            db.query(t, function (err, result) {
                if (err) console.log(err);
                if (result) console.log('record inserted');
                res.send(result)

            })
            var t = "UPDATE  Arrival  SET gate = 'C2', status = 'Delayed' WHERE gate = 'C1'";
            db.query(t, function (err, result) {
                if (err) console.log(err);
                if (result) console.log('record inserted');
                res.send(result)

            })
        }
        else if (data.enable === "en") {

            var n = "UPDATE arrivaln  SET gate = 'C1', status = 'On Time' WHERE gate = 'C2' AND status = 'Delayed'";
            db.query(n, function (err, result) {
                if (err) console.log(err);
                if (result) console.log('record inserted');
                res.send(result)

            })
            var t = "UPDATE arrivalt  SET gate = 'C1', status = 'On Time' WHERE gate = 'C3' AND status = 'Delayed'";
            db.query(t, function (err, result) {
                if (err) console.log(err);
                if (result) console.log('record inserted');
                res.send(result)

            })
            var f = "UPDATE  Arrival  SET gate = 'C1', status = 'On Time' WHERE gate = 'C2' AND status = 'Delayed'";
            db.query(f, function (err, result) {
                if (err) console.log(err);
                if (result) console.log('record inserted');
                res.send(result)

            })
        }
        else {
            console.log("id dosnt exsit")
        }
    }

    // C2 if----------------------------------------------------------------------------------
    else if (data.gate === "C2") {
        if (data.enable === "dis") {

            var n = "UPDATE  arrivaln  SET gate = 'C3', status = 'Delayed' WHERE gate = 'C2'";
            db.query(n, function (err, result) {
                if (err) console.log(err);
                if (result) console.log('record inserted');
                res.send(result)

            })
            var t = "UPDATE  arrivalt  SET gate = 'C1', status = 'Delayed' WHERE gate = 'C2'";
            db.query(t, function (err, result) {
                if (err) console.log(err);
                if (result) console.log('record inserted');
                res.send(result)

            })
            var t = "UPDATE  Arrival  SET gate = 'C2', status = 'Delayed' WHERE gate = 'C2'";
            db.query(t, function (err, result) {
                if (err) console.log(err);
                if (result) console.log('record inserted');
                res.send(result)

            })
        }
        else if (data.enable === "en") {
            console.log("in the line 881")
            var n = "UPDATE arrivaln  SET gate = 'C3', status = 'On Time' WHERE gate = 'C3' AND status = 'Delayed'";
            db.query(n, function (err, result) {
                if (err) console.log(err);
                if (result) console.log('record updated');
                res.send(result)

            })
            var t = "UPDATE arrivalt  SET gate = 'C1', status = 'On Time' WHERE gate = 'C1' AND status = 'Delayed'";
            db.query(t, function (err, result) {
                if (err) console.log(err);
                if (result) console.log('record updated');
                res.send(result)

            })
            var f = "UPDATE Arrival SET gate = 'C2', status = 'On Time' WHERE gate = 'C2' AND status = 'Delayed'";
            db.query(f, function (err, result) {
                if (err) console.log(err);
                if (result) console.log('record updated');
                res.send(result)

            })
        }
        else {
            console.log("id dosnt exsit")
        }
    }

    // C3 if---------------------------------------------------------------------------------------
    else if (data.gate === "C3") {
        if (data.enable === "dis") {

            var n = "UPDATE  arrivaln  SET gate = 'C2', status = 'Delayed' WHERE gate = 'C3'";
            db.query(n, function (err, result) {
                if (err) console.log(err);
                if (result) console.log('record updated');
                res.send(result)

            })
            var t = "UPDATE  arrivalt  SET gate = 'C1', status = 'Delayed' WHERE gate = 'C3'";
            db.query(t, function (err, result) {
                if (err) console.log(err);
                if (result) console.log('record updated');
                res.send(result)

            })
            var t = "UPDATE  Arrival  SET gate = 'C1', status = 'Delayed' WHERE gate = 'C3'";
            db.query(t, function (err, result) {
                if (err) console.log(err);
                if (result) console.log('record updated');
                res.send(result)

            })
        }
        else if (data.enable === "en") {

            var n = "UPDATE arrivaln  SET gate = 'C3', status = 'On Time' WHERE gate = 'C2' AND status = 'Delayed'";
            db.query(n, function (err, result) {
                if (err) console.log(err);
                if (result) console.log('record inserted');
                res.send(result)

            })
            var t = "UPDATE arrivalt  SET gate = 'C3', status = 'On Time' WHERE gate = 'C1' AND status = 'Delayed'";
            db.query(t, function (err, result) {
                if (err) console.log(err);
                if (result) console.log('record inserted');
                res.send(result)

            })
            var f = "UPDATE Arrival  SET gate = 'C3', status = 'On Time' WHERE gate = 'C1' AND status = 'Delayed'";
            db.query(f, function (err, result) {
                if (err) console.log(err);
                if (result) console.log('record inserted');
                res.send(result)

            })
        }
        else {
            console.log("id dosnt exsit")
        }
    }
    else {
        console.log("id dosnt exsit")
    }

})

// Departure----------------------------------------------------------------------------------------------------------------
// Terminal 1------------------------------------------------------------------------------------------

app.patch("/a1", (req, res) => {
    var data = req.body;


    console.log(data)

    // a1 If-------------------------------------------
    if (data.gate === "a1") {
        if (data.enable === "da") {

            var n = "UPDATE  departuren  SET gate = 'a2', status = 'Delayed' WHERE gate = 'a1'";
            db.query(n, function (err, result) {
                if (err) console.log(err);
                if (result) console.log('record inserted');
                res.send(result);

            })
            var t = "UPDATE  departuret  SET gate = 'a3', status = 'Delayed' WHERE gate = 'a1'";
            db.query(t, function (err, result) {
                if (err) console.log(err);
                if (result) console.log('record inserted');
                res.send(result);

            })
            var t = "UPDATE  departuref  SET gate = 'a2', status = 'Delayed' WHERE gate = 'a1'";
            db.query(t, function (err, result) {
                if (err) console.log(err);
                if (result) console.log('record inserted');
                res.send(result);

            })
        }
        else if (data.enable === "ea") {

            var n = "UPDATE departuren  SET gate = 'a1', status = 'On Time' WHERE gate = 'a2' AND status = 'Delayed'";
            db.query(n, function (err, result) {
                if (err) console.log(err);
                if (result) console.log('record inserted');
                res.send(result);

            })
            var t = "UPDATE departuret  SET gate = 'a1', status = 'On Time' WHERE gate = 'a3' AND status = 'Delayed'";
            db.query(t, function (err, result) {
                if (err) console.log(err);
                if (result) console.log('record inserted');
                res.send(result);

            })
            var f = "UPDATE departuref  SET gate = 'a1', status = 'On Time' WHERE gate = 'a2' AND status = 'Delayed'";
            db.query(f, function (err, result) {
                if (err) console.log(err);
                if (result) console.log('record inserted');
                res.send(result);

            })
        }
        else {
            console.log("id dosnt exsit")
        }
    }

    // a2 if----------------------------------------------------------------------------------
    else if (data.gate === "a2") {
        if (data.enable === "da") {

            var n = "UPDATE  departuren  SET gate = 'a3', status = 'Delayed' WHERE gate = 'a2'";
            db.query(n, function (err, result) {
                if (err) console.log(err);
                if (result) console.log('record inserted');
                res.send(result);

            })
            var t = "UPDATE  departuret  SET gate = 'a1', status = 'Delayed' WHERE gate = 'a2'";
            db.query(t, function (err, result) {
                if (err) console.log(err);
                if (result) console.log('record inserted');
                res.send(result);

            })
            var t = "UPDATE  departuref  SET gate = 'a1', status = 'Delayed' WHERE gate = 'a2'";
            db.query(t, function (err, result) {
                if (err) console.log(err);
                if (result) console.log('record inserted');
                res.send(result);

            })
        }
        else if (data.enable === "ea") {

            var n = "UPDATE departuren  SET gate = 'a2', status = 'On Time' WHERE gate = 'a3' AND status = 'Delayed'";
            db.query(n, function (err, result) {
                if (err) console.log(err);
                if (result) console.log('record inserted');
                res.send(result);

            })
            var t = "UPDATE departuret  SET gate = 'a2', status = 'On Time' WHERE gate = 'a1' AND status = 'Delayed'";
            db.query(t, function (err, result) {
                if (err) console.log(err);
                if (result) console.log('record inserted');
                res.send(result);

            })
            var f = "UPDATE departuref  SET gate = 'a2', status = 'On Time' WHERE gate = 'a1' AND status = 'Delayed'";
            db.query(f, function (err, result) {
                if (err) console.log(err);
                if (result) console.log('record inserted');
                res.send(result);

            })
        }
        else {
            console.log("id dosnt exsit")
        }
    }
    // A3 if---------------------------------------------------------------------------------------
    else if (data.gate === "a3") {
        if (data.enable === "da") {

            var n = "UPDATE  departuren  SET gate = 'A2', status = 'Delayed' WHERE gate = 'A3'";
            db.query(n, function (err, result) {
                if (err) console.log(err);
                if (result) console.log('record inserted');
                res.send(result);

            })
            var t = "UPDATE  departuret  SET gate = 'A1', status = 'Delayed' WHERE gate = 'A3'";
            db.query(t, function (err, result) {
                if (err) console.log(err);
                if (result) console.log('record inserted');
                res.send(result);

            })
            var t = "UPDATE  departuref  SET gate = 'A1', status = 'Delayed' WHERE gate = 'A3'";
            db.query(t, function (err, result) {
                if (err) console.log(err);
                if (result) console.log('record inserted');
                res.send(result);

            })
        }
        else if (data.enable === "ea") {

            var n = "UPDATE departuren  SET gate = 'A3', status = 'On Time' WHERE gate = 'A2' AND status = 'Delayed'";
            db.query(n, function (err, result) {
                if (err) console.log(err);
                if (result) console.log('record inserted');
                res.send(result);

            })
            var t = "UPDATE departuret  SET gate = 'A3', status = 'On Time' WHERE gate = 'A1' AND status = 'Delayed'";
            db.query(t, function (err, result) {
                if (err) console.log(err);
                if (result) console.log('record inserted');
                res.send(result);

            })
            var f = "UPDATE departuref  SET gate = 'A3', status = 'On Time' WHERE gate = 'A1' AND status = 'Delayed'";
            db.query(f, function (err, result) {
                if (err) console.log(err);
                if (result) console.log('record inserted');
                res.send(result);

            })
        }
        else {
            console.log("id dosnt exsit")
        }
    }
    else {
        console.log("id dosnt exsit")
    }
}
)


// Terminal 1 finishes here -----------------------------------------------------------------------------------\

// Terminal 2 starts here

app.patch("/b1", (req, res) => {
    var data = req.body;


    console.log(data)

    // b1 If-------------------------------------------
    if (data.gate === "b1") {
        if (data.enable === "daa") {

            var n = "UPDATE  departuren  SET gate = 'B2', status = 'Delayed' WHERE gate = 'B1'";
            db.query(n, function (err, result) {
                if (err) console.log(err);
                if (result) console.log('record inserted');
                res.send(result);

            })
            var t = "UPDATE  departuret  SET gate = 'B3', status = 'Delayed' WHERE gate = 'B1'";
            db.query(t, function (err, result) {
                if (err) console.log(err);
                if (result) console.log('record inserted');
                res.send(result);

            })
            var t = "UPDATE  departuref  SET gate = 'B2', status = 'Delayed' WHERE gate = 'B1'";
            db.query(t, function (err, result) {
                if (err) console.log(err);
                if (result) console.log('record inserted');
                res.send(result);

            })
        }
        else if (data.enable === "eaa") {

            var n = "UPDATE departuren  SET gate = 'B1', status = 'On Time' WHERE gate = 'B2' AND status = 'Delayed'";
            db.query(n, function (err, result) {
                if (err) console.log(err);
                if (result) console.log('record inserted');
                res.send(result);

            })
            var t = "UPDATE departuret  SET gate = 'B1', status = 'On Time' WHERE gate = 'B3' AND status = 'Delayed'";
            db.query(t, function (err, result) {
                if (err) console.log(err);
                if (result) console.log('record inserted');
                res.send(result);

            })
            var f = "UPDATE departuref  SET gate = 'B1', status = 'On Time' WHERE gate = 'B2' AND status = 'Delayed'";
            db.query(f, function (err, result) {
                if (err) console.log(err);
                if (result) console.log('record inserted');
                res.send(result);

            })
        }
        else {
            console.log("id dosnt exsit")
        }
    }

    // b2 if----------------------------------------------------------------------------------
    else if (data.gate === "b2") {
        if (data.enable === "daa") {

            var n = "UPDATE  departuren  SET gate = 'B3', status = 'Delayed' WHERE gate = 'B2'";
            db.query(n, function (err, result) {
                if (err) console.log(err);
                if (result) console.log('record inserted');
                res.send(result);

            })
            var t = "UPDATE  departuret  SET gate = 'B1', status = 'Delayed' WHERE gate = 'B2'";
            db.query(t, function (err, result) {
                if (err) console.log(err);
                if (result) console.log('record inserted');
                res.send(result);

            })
            var t = "UPDATE  departuref  SET gate = 'B1', status = 'Delayed' WHERE gate = 'B2'";
            db.query(t, function (err, result) {
                if (err) console.log(err);
                if (result) console.log('record inserted');
                res.send(result);

            })
        }
        else if (data.enable === "eaa") {

            var n = "UPDATE departuren  SET gate = 'B2', status = 'On Time' WHERE gate = 'B3' AND status = 'Delayed'";
            db.query(n, function (err, result) {
                if (err) console.log(err);
                if (result) console.log('record inserted');
                res.send(result);

            })
            var t = "UPDATE departuret  SET gate = 'B2', status = 'On Time' WHERE gate = 'B1' AND status = 'Delayed'";
            db.query(t, function (err, result) {
                if (err) console.log(err);
                if (result) console.log('record inserted');
                res.send(result);

            })
            var f = "UPDATE departuref  SET gate = 'B2', status = 'On Time' WHERE gate = 'B1' AND status = 'Delayed'";
            db.query(f, function (err, result) {
                if (err) console.log(err);
                if (result) console.log('record inserted');
                res.send(result);

            })
        }
        else {
            console.log("id dosnt exsit")
        }
    }
    // b3 if---------------------------------------------------------------------------------------
    else if (data.gate === "b3") {
        if (data.enable === "daa") {

            var n = "UPDATE  departuren  SET gate = 'B2', status = 'Delayed' WHERE gate = 'B3'";
            db.query(n, function (err, result) {
                if (err) console.log(err);
                if (result) console.log('record inserted');
                res.send(result);

            })
            var t = "UPDATE  departuret  SET gate = 'B1', status = 'Delayed' WHERE gate = 'B3'";
            db.query(t, function (err, result) {
                if (err) console.log(err);
                if (result) console.log('record inserted');
                res.send(result);

            })
            var t = "UPDATE  departuref  SET gate = 'B1', status = 'Delayed' WHERE gate = 'B3'";
            db.query(t, function (err, result) {
                if (err) console.log(err);
                if (result) console.log('record inserted');
                res.send(result);

            })
        }
        else if (data.enable === "eaa") {

            var n = "UPDATE departuren  SET gate = 'B3', status = 'On Time' WHERE gate = 'B2' AND status = 'Delayed'";
            db.query(n, function (err, result) {
                if (err) console.log(err);
                if (result) console.log('record inserted');
                res.send(result);

            })
            var t = "UPDATE departuret  SET gate = 'B3', status = 'On Time' WHERE gate = 'B1' AND status = 'Delayed'";
            db.query(t, function (err, result) {
                if (err) console.log(err);
                if (result) console.log('record inserted');
                res.send(result);

            })
            var f = "UPDATE departuref  SET gate = 'B3', status = 'On Time' WHERE gate = 'B1' AND status = 'Delayed'";
            db.query(f, function (err, result) {
                if (err) console.log(err);
                if (result) console.log('record inserted');
                res.send(result);

            })
        }
        else {
            console.log("id dosnt exsit")
        }
    }
    else {
        console.log("id dosnt exsit")
    }
}
)


//Terminal 2 end here--------------------------------------------------------------------------------------------------------------------------------------------------------Terminal 3 start----------------------------------------


app.patch("/c1", (req, res) => {
    var data = req.body;


    console.log(data)

    // c1 If-------------------------------------------
    if (data.gate === "c1") {
        if (data.enable === "daaa") {

            var n = "UPDATE  departuren  SET gate = 'C2', status = 'Delayed' WHERE gate = 'C1'";
            db.query(n, function (err, result) {
                if (err) console.log(err);
                if (result) console.log('record inserted');
                res.send(result);

            })
            var t = "UPDATE  departuret  SET gate = 'C3', status = 'Delayed' WHERE gate = 'C1'";
            db.query(t, function (err, result) {
                if (err) console.log(err);
                if (result) console.log('record inserted');
                res.send(result);

            })
            var t = "UPDATE  departuref  SET gate = 'C2', status = 'Delayed' WHERE gate = 'C1'";
            db.query(t, function (err, result) {
                if (err) console.log(err);
                if (result) console.log('record inserted');
                res.send(result);

            })
        }
        else if (data.enable === "eaaa") {

            var n = "UPDATE departuren  SET gate = 'C1', status = 'On Time' WHERE gate = 'C2' AND status = 'Delayed'";
            db.query(n, function (err, result) {
                if (err) console.log(err);
                if (result) console.log('record inserted');
                res.send(result);

            })
            var t = "UPDATE departuret  SET gate = 'C1', status = 'On Time' WHERE gate = 'C3' AND status = 'Delayed'";
            db.query(t, function (err, result) {
                if (err) console.log(err);
                if (result) console.log('record inserted');
                res.send(result);

            })
            var f = "UPDATE departuref  SET gate = 'C1', status = 'On Time' WHERE gate = 'C2' AND status = 'Delayed'";
            db.query(f, function (err, result) {
                if (err) console.log(err);
                if (result) console.log('record inserted');
                res.send(result);

            })
        }
        else {
            console.log("id dosnt exsit")
        }
    }

    // c2 if----------------------------------------------------------------------------------
    else if (data.gate === "c2") {
        if (data.enable === "daaa") {

            var n = "UPDATE  departuren  SET gate = 'C3', status = 'Delayed' WHERE gate = 'C2'";
            db.query(n, function (err, result) {
                if (err) console.log(err);
                if (result) console.log('record inserted');
                res.send(result);

            })
            var t = "UPDATE  arrivalt  SET gate = 'C1', status = 'Delayed' WHERE gate = 'C2'";
            db.query(t, function (err, result) {
                if (err) console.log(err);
                if (result) console.log('record inserted');
                res.send(result);

            })
            var t = "UPDATE  departuref  SET gate = 'C1', status = 'Delayed' WHERE gate = 'C2'";
            db.query(t, function (err, result) {
                if (err) console.log(err);
                if (result) console.log('record inserted');
                res.send(result);

            })
        }
        else if (data.enable === "eaaa") {

            var n = "UPDATE departuren  SET gate = 'C2', status = 'On Time' WHERE gate = 'C3' AND status = 'Delayed'";
            db.query(n, function (err, result) {
                if (err) console.log(err);
                if (result) console.log('record inserted');
                res.send(result);

            })
            var t = "UPDATE departuret  SET gate = 'C2', status = 'On Time' WHERE gate = 'C1' AND status = 'Delayed'";
            db.query(t, function (err, result) {
                if (err) console.log(err);
                if (result) console.log('record inserted');
                res.send(result);

            })
            var f = "UPDATE departuref  SET gate = 'C2', status = 'On Time' WHERE gate = 'C1' AND status = 'Delayed'";
            db.query(f, function (err, result) {
                if (err) console.log(err);
                if (result) console.log('record inserted');
                res.send(result);

            })
        }
        else {
            console.log("id dosnt exsit")
        }
    }
    // c3 if---------------------------------------------------------------------------------------
    else if (data.gate === "c3") {
        if (data.enable === "daaa") {

            var n = "UPDATE  departuren  SET gate = 'C2', status = 'Delayed' WHERE gate = 'C3'";
            db.query(n, function (err, result) {
                if (err) console.log(err);
                if (result) console.log('record inserted');
                res.send(result);

            })
            var t = "UPDATE  departuret  SET gate = 'C1', status = 'Delayed' WHERE gate = 'C3'";
            db.query(t, function (err, result) {
                if (err) console.log(err);
                if (result) console.log('record inserted');
                res.send(result);

            })
            var t = "UPDATE  departuref  SET gate = 'C1', status = 'Delayed' WHERE gate = 'C3'";
            db.query(t, function (err, result) {
                if (err) console.log(err);
                if (result) console.log('record inserted');
                res.send(result);

            })
        }
        else if (data.enable === "eaaa") {

            var n = "UPDATE departuren  SET gate = 'C3', status = 'On Time' WHERE gate = 'C2' AND status = 'Delayed'";
            db.query(n, function (err, result) {
                if (err) console.log(err);
                if (result) console.log('record inserted');
                res.send(result);

            })
            var t = "UPDATE departuret  SET gate = 'C3', status = 'On Time' WHERE gate = 'C1' AND status = 'Delayed'";
            db.query(t, function (err, result) {
                if (err) console.log(err);
                if (result) console.log('record inserted');
                res.send(result);

            })
            var f = "UPDATE departuref  SET gate = 'C3', status = 'On Time' WHERE gate = 'C1' AND status = 'Delayed'";
            db.query(f, function (err, result) {
                if (err) console.log(err);
                if (result) console.log('record inserted');
                res.send(result);

            })
        }
        else {
            console.log("id dosnt exsit")
        }
    }
    else {
        console.log("id dosnt exsit")
    }
}
)


app.listen(Port, () => {
    console.log(`Server is running at http://35.90.111.36:${Port}`);
})
