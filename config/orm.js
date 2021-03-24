const connection = require("../config/connection.js");

// variable to set object relational mapping(orm)
const orm = {
    // function to select burgers from the database
    selectAll: function (tableName, sel) {
        var queryString = `SELECT * FROM ${tableName};`;
        connection.query(queryString, function (err, result) {
            if (err) {
                throw err;
            }
            sel(result);
        });
    },
    // function to add a burger
    insertOne: function (tableName, cols, vals, sel) {
        var queryString = `INSERT INTO ${tableName} (${cols}) VALUES ('${vals}');`;
        connection.query(queryString, function (err, result) {
            if (err) {
                throw err;
            }
            sel(result);
        });
    },
    // function to update burger
    updateOne: function (colVal, id, sel) {
        var queryString = `UPDATE burgers SET devoured='1' WHERE ${colVal}=${id}`;
        connection.query(queryString, [id], function (err, result) {
            if (err) {
                throw err;
            }
            sel(result);
        });
    }
}
module.exports = orm;