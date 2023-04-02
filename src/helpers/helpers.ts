import { Request, Response, NextFunction } from 'express';
import { PrismaClient, Cafe, Review, Client } from '@prisma/client';

const prisma = new PrismaClient();

const headers = (req: Request, res: Response, next: NextFunction) => {
    const origin = req.headers.origin ? req.headers.origin : ''
    res.setHeader('Access-Control-Allow-Origin', origin)
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE')
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type')
    res.setHeader('Access-Control-Allow-Credentials', 'true')
    next()
}

const registerUser = async (req: Request, res: Response) => {
    const { login, password, email, phone } = req.body;

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

    try {
        if (clients.length === 0) {
            const result: Client = await prisma.client.create({
                data: {
                    login,
                    password,
                    email,
                    phone,
                    bonusPoints: 0,
                },
                include: { favourites: true, reviews: true, bookings: true },
            })
            res.json(result)
        } else {
            res.json({"error":"login or email is not vacant"})
        }
    }catch(e: unknown) {
        res.json({"error":"provided wrong or no registration data"})
    }
}

const loginUser = async (req: Request, res: Response) => {
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
            include: {
                favourites: true,
                reviews: {
                    include: {
                        cafe: true,
                    }
                }, bookings: {
                    include: {
                        cafe: true,
                    }
                }},
        });
        if (client.length === 1) {
            res.json(client[0]);
        } else {
            res.json({"error":"wrong username or password"})
        }
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
        default:
            res.json('{"error":"updateFvourites wrong request method"}')
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

const createCafe = async (req: Request, res: Response) => {
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
        res.json({"error":"Already have cafe with this name in this city"})
    }

  }

  const getClientById = async (req: Request, res: Response) => {
    const { id } = req.params;
    if (isNaN(Number(id))) {
        res.json({"error":`no such user id ${id} is NaN`})
    } else {
        const client: Client | null = await prisma.client.findUnique({
            where: {
                id: Number(id),
            },
            include: {
                favourites: {
                    include: {
                        favourClients: true,
                    }
                },
                reviews: {
                    include: {
                        cafe: true,
                    },
                    orderBy: {
                        rating: 'asc'
                    }
                },
                bookings: {
                    include: {
                        cafe: true,
                    },
                },
            }
        });
        if (client) {
            res.json(client);
        } else {
            res.json({"error":`no such user id ${id}`})
        }
    }

}

const editClient = async (req: Request, res: Response) => {
    const { id, email, phone, password } = req.body;
    console.log('client/edit', id, email, phone, password)
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
}

const getCafeById = async (req: Request, res: Response) => {
    const { id } = req.params;
    if (isNaN(Number(id))) {
        res.json({"error":`no such cafe id: ${id} is NaN`})
    } else {
        const cafe: Cafe | null = await prisma.cafe.findUnique({
            where: {
                id: Number(id),
            },
            include: {
                favourClients: true,
                reviews: {
                    include: {
                        author: {
                            include: {
                                reviews: true,
                            }
                        },
                    }
                },
                bookings: {
                    include: {
                        guest: true,
                    }
                }
            }
        });
        if (cafe) {
            res.json(cafe);
        } else {
            res.json({"error":`no such cafe with id ${id}`})
        }
    }

}

const createBooking = async (req: Request, res: Response) => {
    const { clientId, cafeId, tableId, date, duration, guestPhone, guestName, guestAmount } = req.body;

    const booking = await prisma.booking.create({
        data: {
            guestId: Number(clientId),
            cafeId: Number(cafeId),
            tableId: Number(tableId),
            date: date as Date,
            duration: Number(duration),
            guestPhone: String(guestPhone),
            guestName: String(guestName),
            guestAmount: Number(guestAmount),

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
        res.json({"error":"updateBooking wrong request method"});
    }

}

const getByCity = async (req: Request, res: Response) => {
    const { city } = req.params;

    const cafe: Cafe[] = await prisma.cafe.findMany({
        where: {
            city: String(city[0].toUpperCase() + city.slice(1).toLowerCase()),
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
    if (cafe.length > 0) {
        res.json(cafe);
    } else {
        res.json({"error":`no cafe in this city available: ${city}`})
    }
}

const getCafeFiltered = async (req: Request, res: Response) => {
    const { city, averageCheck, rating } = req.query;
    console.log('get /cafe', city, averageCheck, rating);

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

    const ans: Cafe[] = await prisma.cafe.findMany({
        where: {
            AND: [
                {
                    city: city as string || undefined
                },
                { ...checkFilter },
                { ...ratingFilter },
            ]
        }
    })
    console.log('answer /cafe', ans)
    res.json(ans);
}

const upadatePartial = async (req: Request, res: Response) => {
    const upd: Cafe = await prisma.cafe.update({
        where: {
            id: 2
        },
        data: {
        }
    });

    res.json(upd)
}

const selfInvoke = () => {
    const domain = 'https://restaurants-server-3.onrender.com/'
    const paths = ['client/', 'cafe/'];
    const ind = Math.floor(Math.random() * 2)
    const id = Math.floor(Math.random() * 100) + 1;
    const url = domain + paths[ind] + id;
    fetch(url, {
        method: 'GET'
    })
        .then(async (res):Promise<void> => console.log(res.status, url, 'invoked:', Date()))
        .catch((err: Error) => console.log(err.message))

    setTimeout(selfInvoke, (Math.floor(Math.random() * 30) + 120) * 1000);
}

export {
    headers,
    registerUser,
    loginUser,
    getClientById,
    editClient,
    getCafeById,
    createCafe,
    createReview,
    updateFavourites,
    updateReview,
    createBooking,
    updateBooking,
    getByCity,
    getCafeFiltered,
    upadatePartial,
    selfInvoke
};
