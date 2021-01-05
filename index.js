import express from 'express';             //подключаем express, node -v - версия
import bodyParser from 'body-parser';      //mb for postman

import usersRoutes from './routes/users.js';

const app = express ();
const PORT = 5001;                         //port for the server

app.use(bodyParser.json());

app.use('/users', usersRoutes);

app.get('/', (req, res) =>
    res.send('Hello world')
);

app.listen(PORT, () => console.log(`Server running on port: http://localhost:${PORT}`));
