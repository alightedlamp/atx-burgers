const connection = require('./connection');

const orm = {
  selectAll: function(tableName) {
    const q = 'SELECT * FROM ??';
    return new Promise((resolve, reject) => {
      connection.query(q, [tableName], (err, data) => {
        if (err) {
          reject(err);
        } else {
          resolve(data);
        }
      });
    });
  },
  join: function(tableOneName, tableTwoName) {
    const q = `SELECT 
                ${tableOneName}.id as '${tableOneName}_id', 
                ${tableOneName}.name as '${tableOneName}_name', 
                ${tableOneName}.devoured, 
                ${tableTwoName}.id as '${tableTwoName}_id', 
                ${tableTwoName}.name as '${tableTwoName}_name', 
                ${tableTwoName}.address 
                FROM ${tableOneName} 
                INNER JOIN ${tableTwoName} 
                ON ${tableTwoName}.id = ${tableOneName}.${tableTwoName}_id`;
    return new Promise((resolve, reject) => {
      connection.query(q, (err, data) => {
        if (err) {
          reject(err);
        } else {
          resolve(data);
        }
      });
    });
  },
  insertOne: function(tableName, values) {
    const q = 'INSERT INTO ?? SET ?';
    return new Promise((resolve, reject) => {
      connection.query(q, [...arguments], (err, data) => {
        if (err) {
          reject(err);
        } else {
          resolve(data);
        }
      });
    });
  },
  updateOne: function(tableName, values, id) {
    const q = 'UPDATE ?? SET ? WHERE id = ?';
    return new Promise((resolve, reject) => {
      connection.query(q, [...arguments], (err, data) => {
        if (err) {
          reject(err);
        } else {
          resolve(data);
        }
      });
    });
  },
  deleteOne: function(tableName, id) {
    console.log(tableName, id);
    const q = 'DELETE FROM ?? WHERE id = ?';
    return new Promise((resolve, reject) => {
      connection.query(q, [...arguments], (err, data) => {
        if (err) {
          reject(err);
        } else {
          resolve(data);
        }
      });
    });
  }
};

module.exports = orm;
