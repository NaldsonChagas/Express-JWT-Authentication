const express = require('express');
const app = express();

app.use(express.json());

const connection = require('./database/config');
const User = require('./database/models/user');
connection.authenticate()
  .then(result => console.log(`Connection with DB done`),
    err => console.log('Cant connect with database'));

const loginRoutes = require('./routes/login');
const userRoutes = require('./routes/user');

app.use('/', loginRoutes);
app.use('/user', userRoutes);

app.listen(3000, () => console.log(`Server is listening on 300 port`));

