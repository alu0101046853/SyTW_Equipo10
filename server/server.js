require('rootpath')();
const express = require('express');
const app = express();
const cors = require('cors');
const jwt = require('_helpers/jwt');
const errorHandler = require('_helpers/error-handler');

app.use(express.json());
app.use(cors());
app.use(jwt());

app.use('/users', require('./users/user.controller'));
app.use('/guachinches', require('./guachinches/guachinche.controller'));
app.use('/reservas', require('./reservas/reserva.controller'));

app.use(errorHandler);

const port = process.env.PORT || 3000;
const server = app.listen(port, function () {
    console.log('Server listening on port ' + port);
});


module.exports = {app};