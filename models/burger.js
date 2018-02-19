var orm = require('../config/orm.js');

var burger = {
  all: function(tableName) {
    return orm.selectAll(tableName).then((data, err) => {
      if (err) {
        throw new Error(err);
      } else {
        return data;
      }
    });
  },
  join: function(tableOneName, tableTwoName) {
    return orm.join(tableOneName, tableTwoName).then((data, err) => {
      if (err) {
        throw new Error(err);
      } else {
        return data;
      }
    });
  },
  create: function(tableName, values) {
    return orm.insertOne(tableName, values).then((data, err) => {
      if (err) {
        throw new Error(err);
      } else {
        return data;
      }
    });
  },
  update: function(tableName, values, id) {
    return orm.updateOne(tableName, values, id).then((data, err) => {
      if (err) {
        throw new Error(err);
      } else {
        return data;
      }
    });
  },
  delete: function(tableName, id) {
    return orm.deleteOne(tableName, id).then((data, err) => {
      if (err) {
        throw new Error(err);
      } else {
        return data;
      }
    });
  }
};

module.exports = burger;
