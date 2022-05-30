import config from './dbconfig.js';
import sql from 'mssql';

let pool = await sql.connect(config);
let result = await pool.request().query("SELECT top 2 *from Pizzas");

console.log(result.recordsets.length) // count of recordsets returned by the procedure
console.log(result.recordsets[0].length) // count of rows contained in first recordset
console.log(result.recordsets[0]); // first recordset from result.recordsets
console.log(result.recordset) // first recordset from result.recordsets
console.log(result.returnValue) // procedure return value
console.log(result.output) // key/value collection of output values
console.log(result.rowsAffected)// array of numbers,each number represents
                                // the number of rows affected by executed statemens

process.exit();

