import express = require('express');
import path = require("path");
import {headers, selfInvoke} from './helpers';
import clientRoute from './routes/client';
import registerRoute from './routes/register';
import loginRoute from './routes/login';
import cafeRoute from './routes/cafe';
import favouritesRoute from './routes/favourites';
import reviewsRoute from './routes/reviews';
import bookingsRoute from './routes/bookings';

const server = express();

server.use('/img', express.static(path.join(__dirname, '../img')))
server.use(headers);
server.use(express.json());

server.use('/register', registerRoute);
server.use('/login', loginRoute);
server.use('/client', clientRoute);
server.use('/cafe', cafeRoute);
server.use('/favourites', favouritesRoute);
server.use('/reviews', reviewsRoute);
server.use('/bookings', bookingsRoute);


const port = 3003;
server.listen(port, () =>
    console.log(`Raviole Server is ready at: http://localhost:${port}`),
)

// Hack to keep app alive (free hosting issues)
selfInvoke();
