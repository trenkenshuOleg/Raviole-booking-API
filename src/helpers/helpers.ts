import {Request, Response, NextFunction} from 'express';
import { Prisma, PrismaClient, Client, Cafe } from '@prisma/client';

const prisma = new PrismaClient();

const headers = (req: Request, res: Response, next: NextFunction) => {
    const origin = req.headers.origin ? req.headers.origin : ''
	res.setHeader('Access-Control-Allow-Origin', origin)
	res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE')
	res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type')
	res.setHeader('Access-Control-Allow-Credentials', 'true')
	next()
}

const updateFavourites = async (req: Request, res: Response) => {
    const { clientId, cafeId } = req.params;
    const beforeFavourites = await prisma.client.findUnique({
        where: { id: Number(clientId) },
        select: { favourites: true }
    });
    let favouritesIds =
        beforeFavourites
        ? beforeFavourites.favourites.map((el: Cafe) => el.id)
        : [];
    console.log(req.method);
    switch (req.method) {
        case 'POST' :
            favouritesIds.push(Number(cafeId));
            break;
        case 'DELETE' :
            favouritesIds = favouritesIds.filter(el => el !== Number(cafeId));
            break;
    }

    const addFavourite = await prisma.client.update({
        where: {
            id: Number(clientId)
        },
        data: {
            favourites: { set: [...favouritesIds.map(el => {return {id: el}})]}
        },
        include: { favourites: true, reviews: true, bookings: true }
    });

    console.log(addFavourite);
    res.json(addFavourite);
}
export { headers, updateFavourites }