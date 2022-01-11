const db = require("../db/connection");

//Add a deparment to database
addDepartment = (name) => {
  const sql = `INSERT INTO department (name) VALUES (?)`;
  const params  = [name];
  db.query(sql, params, (err, rows) => {
      if(err) {
        if (err.errno === 1062) {
          console.log('Department already existis in the Database');
          process.exit();
        } else throw err;
      } else {
        console.log('Department added!');
        process.exit();
      }
  });
};

module.exports = { addDepartment };