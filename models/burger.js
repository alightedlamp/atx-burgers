var orm = require('../config/orm.js');

var burger = {
  all: function(tableName) {
    return new Promise((resolve, reject) => {
      orm.selectAll(tableName).then((data, err) => {
        if (err) {
          reject(err);
        } else {
          resolve(data);
        }
      });
    });
  },
  join: function(tableOneName, tableTwoName) {
    return new Promise((resolve, reject) => {
      orm.join(tableOneName, tableTwoName).then((data, err) => {
        if (err) {
          reject(err);
        } else {
          resolve(data);
        }
      });
    });
  },
  create: function(tableName, values) {
    return new Promise((resolve, reject) => {
      orm.insertOne(tableName, values).then((data, err) => {
        if (err) {
          reject(err);
        } else {
          resolve(data);
        }
      });
    });
  },
  update: function(tableName, values, id) {
    return new Promise((resolve, reject) => {
      orm.updateOne(tableName, values, id).then((data, err) => {
        if (err) {
          reject(err);
        } else {
          resolve(data);
        }
      });
    });
  },
  delete: function(tableName, id) {
    return new Promise((resolve, reject) => {
      orm.deleteOne(tableName, id).then((data, err) => {
        if (err) {
          reject(err);
        } else {
          resolve(data);
        }
      });
    });
  }
};

module.exports = burger;
