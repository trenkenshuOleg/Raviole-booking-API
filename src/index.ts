import { PrismaClient, Prisma, Client, Cafe } from '@prisma/client';
import express = require('express');
import headers from './cors';
import db from './Restaurants_db';
const path = require('path')


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
        })
        res.json(result)
    } else {
        res.json('{"error":"login or email is already taken"}')
    }

  })

server.post(`/cafe/new`, async (req, res) => {
    const { name, city, phone, coordinates, averageCheck, images, menuImg, rating, workTimeStart, workTimeEnd, translation } = req.body

    const cafes: Cafe[] = await prisma.cafe.findMany({
        where: {
                AND: [{
                        name: name,
                    },
                    {
                        city: city,
                }]
                }
    });
    console.log('existing', cafes);
    const imgs = images as string[];
    const menuImgs = menuImg as string[];
    const coord = coordinates as number[];

    if(cafes.length === 0) {
        const result = await prisma.cafe.create({
        data: {
            name: String(name),
            city: String(city),
            phone: String(phone),
            coordinates: coord,
            averageCheck: Number(averageCheck),
            images: imgs,
            menuImg: menuImgs,
            rating: Number(rating) || undefined,
            workTimeStart: Number(workTimeStart),
            workTimeEnd: Number(workTimeEnd),
            translation: String(translation),
        },
        })
        res.json(result);
    } else {
        res.json('{"error":"login or email is already taken"}')
    }

  })

server.get(`/cafe/:id`, async (req, res) => {
    const { id } = req.params;
    const cafe: Cafe | null = await prisma.cafe.findUnique({
        where : {
            id: Number(id),
        }
    });
    if(cafe) {
        res.json(cafe);
    } else {
        res.json(`{"error":"no such cafe with id ${id}"}`)
    }
})

server.get(`/client/:id`, async (req, res) => {
    const { id } = req.params;
    const client: Client | null = await prisma.client.findUnique({
        where : {
            id: Number(id),
        }
    });
    if(client) {
        res.json(client);
    } else {
        res.json(`{"error":"no such user id ${id}"}`)
    }
})

server.get('/cafe', async (req, res) => {
    const { city, cuisineType, averageCheck, rating, tags } = req.query;
    const arrTags: string[] = String(tags).split('↕');
    const cuisineArr: string[] = String(cuisineType).split('↕');

    // const tagsFilter = tags
    // ? {
    //     tags: {
    //         hasEvery: arrTags
    //     }
    //   }
    // :
    //   {};

    // const cuisineFilter = cuisineType
    // ? {
    //     cuisineType: {
    //         hasEvery: cuisineArr
    //     }
    //   }
    // :
    //   {};

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

    res.json(ans);
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

server.get('/upload', async (req, res) => {
    db.forEach(async el => {
        el.translation = JSON.stringify(el.translation);
        const result = await prisma.cafe.create({
            data: {
                name: el.name,
                city: el.city,
                phone: el.phone,
                coordinates: el.coordinates,
                averageCheck: el.averageCheck,
                images: el.images,
                menuImg: el.menuImg,
                rating: el.rating,
                workTimeStart: el.workTimeStart,
                workTimeEnd: el.workTimeEnd,
                translation: JSON.stringify(el.translation),
            },
            })
            res.json(result);
    });

})

const worker = server.listen(3003, () =>
  console.log(`
🚀 Server ready at: http://localhost:3003
⭐️ Start doing some stuff`),
)

const selfInvoke = () => {
    const domain = 'https://restaurants-server.onrender.com/'
    const paths = ['client/', 'cafe/'];
    const ind = Math.floor(Math.random() * 2)
    const id = Math.floor(Math.random() * 100) + 1;
    const url = domain + paths[ind] + id;
    fetch(url, {
        method: 'GET'
    })
    .then(async (res: Response) => console.log(res.status, url, 'invoked:', Date()))

    setTimeout(selfInvoke, (Math.floor(Math.random() * 30) + 120) * 1000);
}

selfInvoke();
