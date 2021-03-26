const db = require('./connection.js')('burgers_db','joseantonio');

async function selectAll() {
  const data = db.query('SELECT * FROM burgers');
  return data;
}

async function insertOne(burger_name) {
  const request = await db.query('INSERT INTO burgers (burger_name, is_eaten) VALUES (?, 0)', burger_name);
  return request;
}

async function updateOne(burger_name, id) {
  const request = await db.query('UPDATE burgers SET burger_name = ?, is_eaten = 1 WHERE id = ?',
  [burger_name, Number(id)]);
  return request;
}

async function delOne(id) {
  const request = await db.query('DELETE FROM burgers WHERE id = ?', Number(id));
  return request;
}

function end() {
  db.close();
}

module.exports = {selectAll, insertOne, updateOne, delOne, end};
