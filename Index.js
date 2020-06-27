const {Pool} = require('pg');
const pool = new Pool({
    connectionString: "YOUR_URI_HERE",
    ssl: {
        rejectUnauthorized: false
    }
});

pool.query(`SELECT * FROM Users;`, (err, res) => {
    if (err) {
        console.log("Error - Failed to select all from Users");
        console.log(err);
    }
    else{
        console.log(res.rows);
    }
});

pool.query(`INSERT INTO Users(FirstName,LastName)VALUES($1,$2)`, ['FirstName','LastName'], (err, res) => {
    if (err) {
        console.log("Error - Failed to insert data into Users");
        console.log(err);
    }
});