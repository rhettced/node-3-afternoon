// require('dotenv').config();
// const express = require('express');
// const massive = require('massive');

// const app = express();
// const {SERVER_PORT, CONNECTION_STRING} = process.env;

// app.use(express.json());

// app.listen(SERVER_PORT, () =>{console.log(`Server is running on ${SERVER_PORT}`)});




require('dotenv').config();
const express = require('express');
const massive = require('massive');
const products_constroller = require('./products_controller');

const app = express();
const { SERVER_PORT, CONNECTION_STRING } = process.env;

app.use(express.json());

app.get(`/api/products/:id`,products_constroller.getOne);
app.get(`/api/products`,products_constroller.getAll);
app.post(`/api/products`,products_constroller.create);
app.put(`/api/products/:id`,products_constroller.update);
app.delete(`/api/products/:id`,products_constroller.delete);

massive({
    connectionString:CONNECTION_STRING,
    ssl: {rejectUnauthorized: false}
})
.then(db => {
    app.set('db', db);
    console.log(`Party on Sports fans`);
})
.catch(err => console.log(err));

app.listen(SERVER_PORT, () => {console.log(`server is runnning on port ${SERVER_PORT}`)});