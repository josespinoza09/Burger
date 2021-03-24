var orm = require("../config/orm.js");

// burger variable and callback function
var burger = {
  selectAll: function (callback) {
    orm.selectAll("burgers", function (res) {
      callback(res);
    });
  },

  //   insert function
  insertOne: function (addon, callback) {
    orm.insertOne("burgers", "burger_name", addon, function (buns) {
      callback(buns);
    });
  },

  // update function
  updateOne: function (colVal, id, cb) {
    orm.updateOne(colVal, id, function (res) {
      cb(res);
    });
  }
};

module.exports = burger;