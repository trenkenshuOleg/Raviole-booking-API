import { Request, Response, NextFunction } from 'express';
import { PrismaClient, Cafe } from '@prisma/client';

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
        case 'POST':
            favouritesIds.push(Number(cafeId));
            break;
        case 'DELETE':
            favouritesIds = favouritesIds.filter(el => el !== Number(cafeId));
            break;
    }

    const addFavourite = await prisma.client.update({
        where: {
            id: Number(clientId)
        },
        data: {
            favourites: { set: [...favouritesIds.map(el => { return { id: el } })] }
        },
        include: { favourites: true, reviews: true, bookings: true }
    });

    console.log(addFavourite);
    res.json(addFavourite);
}

const createReview = async (req: Request, res: Response) => {
    const { clientId, cafeId, text, rating } = req.body;

    const review = await prisma.review.create({
        data: {
            authorId: Number(clientId),
            cafeId: Number(cafeId),
            text: String(text),
            rating: Number(rating),
        }
    })

    res.json(review);
}

const updateReview = async (req: Request, res: Response) => {
    const { id, text, rating } = req.body;
    const idFromParam = Number(req.params.id);
    const textObj =
        text
            ? {text: String(text)}
            : {}
    const ratingObj =
        text
            ? {rating: Number(rating)}
            : {}
    switch (req.method) {
        case 'PATCH':
            const updated = await prisma.review.update({
                where: { id: Number(id) },
                data: {
                    ...textObj,
                    ...ratingObj
                }
            })
            res.json(updated)
            break;
        case 'DELETE':
            console.log('deleting review #', Number(idFromParam))
            const deleted = await prisma.review.delete({
                where: { id: idFromParam }
            });
            res.json(deleted);
            break;
        default :
        res.json('{"error":"updateReview wrong request method"}');
    }

}

const createBooking = async (req: Request, res: Response) => {
    const { clientId, cafeId, tableId, date, duration } = req.body;

    const booking = await prisma.booking.create({
        data: {
            guestId: Number(clientId),
            cafeId: Number(cafeId),
            tableId: Number(tableId),
            date: date as Date,
            duration: Number(duration),
        }
    })

    res.json(booking);
}

const updateBooking = async (req: Request, res: Response) => {
    const { id, tableId, date, duration } = req.body;
    const idFromParam = Number(req.params.id);
    const tableObj =
        tableId
            ? { tableId: Number(tableId) }
            : {};
    const dateObj =
        date
            ? { date: date as Date }
            : {};
    const durationObj =
        duration
            ? { duration: Number(duration) }
            : {};

    switch (req.method) {
        case 'PATCH':
            const updated = await prisma.booking.update({
                where: { id: Number(id) },
                data: {
                    ...tableObj,
                    ...dateObj,
                    ...durationObj,
                }
            })
            res.json(updated)
            break;
        case 'DELETE':
            console.log('deleting booking #', req.params.id)
            const deleted = await prisma.booking.delete({
                where: { id: idFromParam }
            });
            res.json(deleted);
            break;
        default :
        res.json('{"error":"updateBooking wrong request method"}');
    }

}

const loader = { headers, createReview, updateFavourites, updateReview, createBooking, updateBooking}
export default loader;