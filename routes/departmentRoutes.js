const db = require("../db/connection");

//Add a deparment to database
addDepartment = (name) => {
  const sql = `INSERT INTO department (name) VALUES (?)`;
  const params  = [name];
  db.query(sql, params, (err, rows) => {
      if(err) throw err;
      console.log("Department has been added!");
      process.exit();
  });
};

module.exports = { addDepartment };