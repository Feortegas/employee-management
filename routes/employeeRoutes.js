const db = require("../db/connection");

addEmployee = (first_name, last_name, role_id, manager_id) => {
    if(!manager_id) {
        manager_id = null;
    }
    const sql = `INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES (?, ?, ?, ?)`;
    const params  = [first_name, last_name, role_id, manager_id];
    db.query(sql, params, (err, rows) => {
        if(err) throw err;
        console.log('New Employee added!');
        process.exit();
    });
};

module.exports = { addEmployee };