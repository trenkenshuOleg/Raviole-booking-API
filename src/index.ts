import { PrismaClient, Client, Cafe } from '@prisma/client';
import express = require('express');
import loader from './helpers/helpers';
// import db from './Restaurants_db';
import path = require("path");

const prisma = new PrismaClient();
const server = express();

server.use('/img', express.static(path.join(__dirname, '../img')))
server.use(loader.headers);
server.use(express.json());

server.post(`/register`, loader.registerUser);
server.post('/login', loader.loginUser);
server.get(`/client/:id`, loader.getClientById);
server.patch('/client/edit', loader.editClient);
server.post(`/cafe/new`, loader.createCafe);
server.get(`/cafe/:id`, loader.getCafeById);
server.get('/cafe', loader.getCafeFiltered);
server.get(`/cafe/city/:city`, loader.getByCity);
server.get('/upd', loader.upadatePartial);
server.delete('/favourites/:clientId/:cafeId', loader.updateFavourites);
server.post('/favourites/:clientId/:cafeId', loader.updateFavourites);
server.post('/reviews', loader.createReview);
server.patch('/reviews', loader.updateReview);
server.delete('/reviews/:clientId/:id', loader.updateReview);
server.post('/bookings', loader.createBooking);
server.patch('/bookings', loader.updateBooking);
server.delete('/bookings/:clientId/:id', loader.updateBooking);
server.get('/uploaddatabase', loader.uploadDb);

const port = 3003;
server.listen(port, () =>
    console.log(`
🚀 Server ready at: http://localhost:${port}
⭐️ Start doing some stuff`),
)

const selfInvoke = () => {
    const domain = 'https://restaurants-server-3.onrender.com/'
    const paths = ['client/', 'cafe/'];
    const ind = Math.floor(Math.random() * 2)
    const id = Math.floor(Math.random() * 100) + 1;
    const url = domain + paths[ind] + id;
    fetch(url, {
        method: 'GET'
    })
        .then(async (res: Response) => console.log(res.status, url, 'invoked:', Date()))
        .catch((err: Error) => console.log(err.message))

    setTimeout(selfInvoke, (Math.floor(Math.random() * 30) + 120) * 1000);
}

selfInvoke();
