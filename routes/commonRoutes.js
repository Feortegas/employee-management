const db = require('../db/connection');

// Get all of a db table
getAll = (table) => {
    const sql = `SELECT * FROM ${table}`;
    db.query(sql, (err, result) => {
        if(err) throw err;
        if(result.length === 0) {
            console.log(`There are no current ${table}.`);
            process.exit();
        } else {
            console.table(result);
            process.exit();
        }
    });
};

module.exports = { getAll };