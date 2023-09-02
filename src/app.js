import express from 'express'
import config from './config'

import clientRoutes from './routes/clients.routes'
import usersRoutes from './routes/users.routes'
import appointmentRoutes from './routes/appointments.routes'


const secret = process.env.secret;
const cors = require('cors');
const app = express()

const corsOptions = {
  origin: 'http://localhost:4200',
  optionsSuccessStatus: 200
};

app.use(cors(corsOptions));


var session = require('express-session');

//settings
app.set('port', config.port);

app.use(express.json());
app.use(express.urlencoded({ extended: false }));


//CORS
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
  res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
  next();
});

app.use(clientRoutes);
app.use(usersRoutes);
app.use(appointmentRoutes);

export default app