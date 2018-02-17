var orm = require('../config/orm.js');

var burger = {
  all: function(tableName) {
    return new Promise((resolve, reject) => {
      orm.selectAll(tableName).then(data => resolve(data));
    });
  },
  join: function(tableOneName, tableTwoName) {
    return new Promise((resolve, reject) => {
      orm.join(tableOneName, tableTwoName).then(data => resolve(data));
    });
  },
  create: function(tableName, values, cb) {
    return new Promise((resolve, reject) => {
      orm.create(tableName, values).then(data => resolve(data));
    });
  },
  update: function(tableName, values, id, cb) {
    return new Promise((resolve, reject) => {
      orm.update(tableName, values, id).then(data => resolve(data));
    });
  }
};

module.exports = burger;
