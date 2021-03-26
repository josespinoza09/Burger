const express = require('express');
const app = express();
const PORT = process.env.PORT || 8080;

const orm = require('./config/orm.js');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

app.get('/burger', async function(req, res) {
  const data = await orm.selectAll();
  res.send(JSON.stringify(data));
});

app.delete('/burger/:id', async function(req, res) {
  const request = await orm.delOne(req.params.id);
  res.send( {message: request.message} );
})

app.put('/burger', async function(req,res) {
  const request = await orm.updateOne(req.body.burger_name, req.body.id);
  res.send( {message: request.message} );
})

app.post('/burger', async function(req, res) {
  console.log('API REQUEST: add to burger list', req.body);
  const r = await orm.insertOne(req.body.input);
  res.send( {message: r.message} );
})

app.listen(PORT, () => {
  console.log(`Opened server at localhost:${PORT}`);
})