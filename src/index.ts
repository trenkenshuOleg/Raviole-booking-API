import { PrismaClient, Client, Cafe } from '@prisma/client';
import express = require('express');
import { headers, updateFavourites } from './helpers/helpers';
// import db from './Restaurants_db';
import path = require("path");

const prisma = new PrismaClient();
const server = express();

server.use('/img', express.static(path.join(__dirname, '../img')))
server.use(headers);
server.use(express.json());

console.log(__dirname);

server.post(`/register`, async (req, res) => {
    const { login, password, email, phone } = req.body

    const clients: Client[] = await prisma.client.findMany({
        where: {
            OR: [
                {
                    login: login,
                },
                {
                    email: email,
                },
            ]
        }
    });
    console.log('existing', clients);
    console.log('req', req.body);

    if(clients.length === 0) {
        const result = await prisma.client.create({
        data: {
            login,
            password,
            email,
            phone
        },
        include: { favourites: true, reviews: true, bookings: true },
        })
        res.json(result)
    } else {
        res.json('{"error":"login or email is already taken"}')
    }

})

server.post('/login', async (req, res) => {
    const { login, password } = req.body;
    const client: Client[] = await prisma.client.findMany({
        where: {
            AND: [
                {
                    login: String(login),
                },
                {
                    password: String(password),
                },
            ]
        },
        include: { favourites: true, reviews: true, bookings: true },
    });
    if(client.length === 1) {
        res.json(client);
    } else {
        res.json('{"error":"wrong username or password"}')
    }
})

// server.post(`/cafe/new`, async (req, res) => {
//     const { name, city, phone, coordinates, averageCheck, images, menuImg, rating, workTimeStart, workTimeEnd, translation } = req.body

//     const cafes: Cafe[] = await prisma.cafe.findMany({
//         where: {
//                 AND: [{
//                         name: name,
//                     },
//                     {
//                         city: city,
//                 }]
//                 }
//     });
//     console.log('existing', cafes);
//     const imgs = images as string[];
//     const menuImgs = menuImg as string[];
//     const coord = coordinates as number[];

//     if(cafes.length === 0) {
//         const result = await prisma.cafe.create({
//         data: {
//             name: String(name),
//             city: String(city),
//             phone: String(phone),
//             coordinates: coord,
//             averageCheck: Number(averageCheck),
//             images: imgs,
//             menuImg: menuImgs,
//             rating: Number(rating) || undefined,
//             workTimeStart: Number(workTimeStart),
//             workTimeEnd: Number(workTimeEnd),
//             translation: String(translation),
//         },
//         })
//         res.json(result);
//     } else {
//         res.json('{"error":"login or email is already taken"}')
//     }

//   })

server.get(`/client/:id`, async (req, res) => {
    const { id } = req.params;
    if (isNaN(Number(id))) {
        res.json(`{"error":"no such user id ${id} is NaN"}`)
    } else {
        const client: Client | null = await prisma.client.findUnique({
            where: {
                id: Number(id),
            },
            include: { favourites: true, reviews: true, bookings: true }
        });
        if (client) {
            res.json(client);
        } else {
            res.json(`{"error":"no such user id ${id}"}`)
        }
    }

})

server.get('/clients', async (req, res) => {
    const clients: Client[] = await prisma.client.findMany({
        where: {
            OR: [
                {
                    login: 'demo',
                },
                {
                    email: 'xxx',
                },
            ]
        }
    });
    console.log(clients.length);
    res.json(clients);
    // res.json('{"error":"login or email is not unique"}')
})

server.patch('client/edit/:id', async (req, res) => {
    const { email, phone, password } = req.body;
    const { id } = req.params;
    const passObj =
        password
        ? { password }
        : {};
    const phoneObj =
        phone
        ? { phone }
        : {};
    const emailObj =
        email
        ? { email }
        : {};

    const result: Client | null = await prisma.client.update({
        where: {
            id: Number(id)
        },
        data: {
            ...passObj,
            ...emailObj,
            ...phoneObj,
        },
        })

        res.json(result)
})

server.get(`/cafe/:id`, async (req, res) => {
    const { id } = req.params;
    if (isNaN(Number(id))) {
        res.json(`{"error":"no such cafe id ${id} is NaN"}`)
    } else {
        const cafe: Cafe | null = await prisma.cafe.findUnique({
            where: {
                id: Number(id),
            },
            include: { favourClients : true, reviews: true, bookings: true }
        });
        if (cafe) {
            res.json(cafe);
        } else {
            res.json(`{"error":"no such cafe with id ${id}"}`)
        }
    }

})


server.get('/cafe', async (req, res) => {
    const { city, averageCheck, rating } = req.query;
    console.log('get /cafe', city, averageCheck,  rating);

    const checkFilter = averageCheck
    ? {
        averageCheck: {
            lte: Number(averageCheck)
        }
    }
    :
    {};

    const ratingFilter = rating
    ? {
        rating: {
            gte: Number(rating)
        }
      }
      :
      {};

      const ans = await prisma.cafe.findMany({
          where: {
            AND: [
                {
                    city: city as string || undefined
                },
                {...checkFilter},
                {...ratingFilter},
            ]
    }
})
    console.log('answer /cafe', ans)
    res.json(ans);
})

server.get(`/cafe/city/:city`, async (req, res) => {
    const { city } = req.params;
    const cafe: Cafe[] = await prisma.cafe.findMany({
        where : {
            city: String(city),
        }
    });
    if(cafe) {
        res.json(cafe);
    } else {
        res.json(`{"error":"no cafe in ${city}"}`)
    }
})

server.delete('/favourites/:clientId/:cafeId', updateFavourites)

server.post('/favourite/:clientId/:cafeId', updateFavourites)

// server.get('/upload', async (req, res) => {
//     let ans: Cafe[] = [];
//     db.forEach(async el => {
//         console.log('creating', el.name, el.city);
//         const result = await prisma.cafe.create({
//             data: {
//                 name: el.name,
//                 city: el.city,
//                 phone: el.phone,
//                 coordinates: el.coordinates,
//                 averageCheck: el.averageCheck,
//                 images: el.images,
//                 menuImg: el.menuImg,
//                 rating: el.rating,
//                 workTimeStart: el.workTimeStart,
//                 workTimeEnd: el.workTimeEnd,
//                 translation: JSON.stringify(el.translation),
//             },
//             })
//             console.log(result);
//     });

// })

const worker = server.listen(3003, () =>
  console.log(`
🚀 Server ready at: http://localhost:3003
⭐️ Start doing some stuff`),
)

const selfInvoke = () => {
    const domain = 'https://restaurants-server-2.onrender.com/'
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
