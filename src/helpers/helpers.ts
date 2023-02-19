import { Request, Response, NextFunction } from 'express';
import { PrismaClient, Cafe, Prisma, Review } from '@prisma/client';

const prisma = new PrismaClient();

const headers = (req: Request, res: Response, next: NextFunction) => {
    const origin = req.headers.origin ? req.headers.origin : ''
    res.setHeader('Access-Control-Allow-Origin', origin)
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE')
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type')
    res.setHeader('Access-Control-Allow-Credentials', 'true')
    next()
}

const restWithUdatedRating = async (data: Cafe & { reviews: Review[]},) => {
    const marks: number[] = [];
        data?.reviews.forEach((el => {
            marks.push(el.rating);
        }))
        const average = marks.reduce( (sum, cur) => sum + cur) / marks.length;

        const updated = await prisma.cafe.update({
            where: {
                id: data.id
            },
            data: {
                rating: average.toFixed(1)
            },
            include: {
                reviews: {
                    include: {
                        author: true,
                    }
                },
                bookings: {
                    include: {
                        guest: true,
                    }
                }
            }
        })

        return updated
}

const getCafeWithRewiews = async (id: number) => {
    const rest = prisma.cafe.findUnique({
        where: {
            id
        },
        include: {
            reviews: true,
        }
    })

    return rest
}

const addUserBonus = async (clientId: number, newPoints: number) => {
    const updated = prisma.client.update({
        where: {
            id: clientId
        },
        data: {
            bonusPoints: {
                increment: newPoints,
            },
        },
    })
    return updated
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
            console.log('deleting favourite #', cafeId)
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
        include: {
            favourites: true,
            reviews: {
                include: {
                    cafe: true
                }
            },
            bookings: {
                include: {
                    cafe: true
                }
            } }
    });

    console.log(addFavourite);
    res.json(addFavourite);
}

const createReview = async (req: Request, res: Response) => {
    const { clientId, cafeId, text, rating } = req.body;

    const review = prisma.review.create({
        data: {
            authorId: Number(clientId),
            cafeId: Number(cafeId),
            text: String(text),
            rating: Number(rating),
        }
    });
    review
        .then(() => {
            const cafeWithReviews = prisma.cafe.findUnique({
                where: {
                    id: Number(cafeId)
                }, include: {
                    reviews: true,
                }
            });
            return cafeWithReviews
        })
        .then(async (data) => {
            data &&  res.json(await restWithUdatedRating(data));
        })
        addUserBonus( +clientId, 1);

}

const updateReview = async (req: Request, res: Response) => {
    const { id, text, rating } = req.body;
    const idFromParam = Number(req.params.id);
    const userId = Number(req.params.clientId);
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
            const updated = prisma.review.update({
                where: { id: Number(id) },
                data: {
                    ...textObj,
                    ...ratingObj
                }
            });

            updated
                .then((review) => {
                    return getCafeWithRewiews(review.cafeId)
                })
                .then(async (rest) => {
                    rest &&  res.json(await restWithUdatedRating(rest));
                })

            break;
        case 'DELETE':
            console.log('deleting review #', Number(idFromParam))
            const deleted = prisma.review.delete({
                where: { id: idFromParam }
            });
            deleted
                .then((review) => {
                    return getCafeWithRewiews(review.cafeId)
                })
                .then((rest) => {
                    rest &&  res.json(restWithUdatedRating(rest));
                });
            addUserBonus( +userId, -1);
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
    addUserBonus( +clientId, 5);

    res.json(booking);
}

const updateBooking = async (req: Request, res: Response) => {
    const { id, tableId, date, duration } = req.body;
    const idFromParam = Number(req.params.id);
    const userId = Number(req.params.clientId);
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
            addUserBonus( +userId, -5);
            res.json(deleted);
            break;
        default :
        res.json('{"error":"updateBooking wrong request method"}');
    }

}

const getByCity = async (req: Request, res: Response) => {
    const { city } = req.params;
    const cafe: Cafe[] = await prisma.cafe.findMany({
        where: {
            city: String(city),
        },
        include: {
            bookings: {
                include: {
                    guest: true
                }
            },
            reviews: {
                include: {
                    author: true
                }
            }
        }
    });
    if (cafe) {
        res.json(cafe);
    } else {
        res.json(`{"error":"no cafe in ${city}"}`)
    }
}


const loader = { headers, createReview, updateFavourites, updateReview, createBooking, updateBooking, getByCity}
export default loader;