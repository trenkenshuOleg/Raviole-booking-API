interface iTranslate {
    name: string;
    city: string;
    address: string;
    description: string;
    cuisineType: string[];
}

type iCoordinate = [number, number]

interface iCafe extends Record<string, string | string[] | number | number[] | { [key: string]: iTranslate} | string > {
    coordinates: iCoordinate;
    city: string;
    name: string,
    phone: string;
    rating: number;
    averageCheck: number;
    images: string[];
    menuImg: string[];
    workTimeStart: number;
    workTimeEnd: number;
    translation: {
        en: iTranslate,
        ru: iTranslate,
    } | string;

}


const db: iCafe[] = [
    {
        city: 'Minsk',
        name: 'Dom',
        coordinates: [53.90263624545531, 27.551036192038072],
        phone: '+375293841133',
        rating: 4.6,
        averageCheck: 40,
        images: [
            'img/rest1/images/1.jpg',
            'img/rest1/images/2.jpg',
            'img/rest1/images/3.jpg',
            'img/rest1/images/4.jpg',
            'img/rest1/images/5.jpg',
            'img/rest1/images/6.jpg',
            'img/rest1/images/7.jpg',
            'img/rest1/images/8.jpg',
            'img/rest1/images/9.jpg',
            'img/rest1/images/10.jpg',
            'img/rest1/images/11.jpg',

        ],
        menuImg: [
            'img/rest1/menu/1.jpg',
            'img/rest1/menu/2.jpg',
            'img/rest1/menu/3.jpg',
            'img/rest1/menu/4.jpg',
            'img/rest1/menu/5.jpg',
            'img/rest1/menu/6.jpg',
            'img/rest1/menu/7.jpg',
        ],
        workTimeStart: 12,
        workTimeEnd: 24,
        translation: {
            en: {
                name: 'Dom',
                city: 'Minsk',
                address: '26 Revolutsionnaya str.',
                description: 'Absolute comfort, impeccable kitchen quality, sophisticated design.  DOM restaurant is a place with a special mood, devoid of pathos and bombast. These are two floors of hospitality, where they carefully observe high standards of service and listen to the wishes of each guest.',
                cuisineType: [
                    'European'
                ],
            },
            ru: {
                name: 'Дом',
                city: 'Минск',
                address: 'ул. Революционная, 26',
                description: 'Безусловный комфорт, безупречное качество кухни, утонченный дизайн.  Ресторан DOM — место с особым настроением, лишенное пафоса и напыщенности. Это два этажа гостеприимства, где тщательно соблюдают высокие стандарты обслуживания и прислушиваются к пожеланиям каждого гостя.',
                cuisineType: [
                    'Европейская'
                ],
            }
        }
    },
    {
        name: 'Osoboe mesto',
        city: 'Minsk',
        coordinates: [53.87824824272922, 27.54745319339566],
        phone: '+375296847400',
        rating: 4.5,
        averageCheck: 45,
        images: [
            'img/rest2/images/1.jpg',
            'img/rest2/images/2.jpg',
            'img/rest2/images/3.jpg',
            'img/rest2/images/4.jpg',
            'img/rest2/images/5.jpg',
            'img/rest2/images/6.jpg',
            'img/rest2/images/7.jpg',
            'img/rest2/images/8.jpg',
        ],
        menuImg: [
            'img/rest2/menu/1.jpg',
            'img/rest2/menu/2.jpg',
            'img/rest2/menu/3.jpg',
            'img/rest2/menu/4.jpg',
            'img/rest2/menu/5.jpg',
            'img/rest2/menu/6.jpg',
            'img/rest2/menu/7.jpg',
            'img/rest2/menu/8.jpg',
            'img/rest2/menu/9.jpg',
            'img/rest2/menu/10.jpg',
            'img/rest2/menu/11.jpg',
        ],
        workTimeStart: 11,
        workTimeEnd: 23,
        translation: {
            en: {
                name: 'Osoboe mesto',
                city: 'Minsk',
                address: '17 A Voronyansky str.',
                description: 'Do you want to relax after a busy day, have fun with friends or be alone with your thoughts? Welcome to the restaurant-bar "Special Place" in Minsk on Voronyansky Street: here you will find freedom from everyday worries and get a charge of good mood.',
                cuisineType: [
                    'European',
                    'Italian',
                    'Russian',
                ],
            },
            ru: {
                name: 'Дом',
                city: 'Минск',
                address: 'ул. Воронянского 17А',
                description: 'Хотите отдохнуть после насыщенного дня, весело провести время в компании друзей или побыть наедине со своими мыслями? Добро пожаловать в ресторан-бар «Особое место» в Минске на ул. Воронянского: здесь вы обретете свободу от повседневных забот и получите заряд хорошего настроения.',
                cuisineType: [
                    'Европейская',
                    'Итальянская',
                    'Русская',

                ],
            }
        }
    },
    {
        name: 'Morella',
        city: 'Minsk',
        coordinates: [53.904927541243815, 27.539691054344736],
        phone: '+375296440464',
        rating: 4.3,
        averageCheck: 30,
        images: [
            'img/rest3/images/1.jpg',
            'img/rest3/images/2.jpg',
            'img/rest3/images/3.jpg',
            'img/rest3/images/4.jpg',
            'img/rest3/images/5.jpg',
        ],
        menuImg: [
            'img/rest3/menu/1.jpg',
            'img/rest3/menu/2.jpg',
            'img/rest3/menu/3.jpg',
            'img/rest3/menu/4.jpg',
        ],
        workTimeStart: 12,
        workTimeEnd: 23,
        translation: {
            en: {
                name: 'Morella',
                city: 'Minsk',
                address: '2 Sukhaya str.',
                description: 'Morella is a cafe in the heart of the capital, where it is equally pleasant to enjoy a business brunch and a friendly dinner in the company of exquisite Spanish—Italian cuisine and a warm atmosphere.',
                cuisineType: [
                    'European',
                    'Italian',
                ],
            },
            ru: {
                name: 'Morella',
                city: 'Минск',
                address: 'ул. Сухая, 2',
                description: 'Morella — это кафе в сердце столицы, где одинаково приятно насладиться деловым бранчем и дружеским ужином в компании изысканной испанско-итальянской кухни и душевной атмосферы.',
                cuisineType: [
                    'Европейская',
                    'Итальянская',

                ],
            }
        }
    },
    {
        name: 'Bistro o’Da!',
        city: 'Minsk',
        coordinates: [53.93161768204467, 27.651104973453524],
        phone: '+375291094411',
        rating: 4.6,
        averageCheck: 30,
        images: [
            'img/rest4/images/1.jpg',
            'img/rest4/images/2.jpg',
            'img/rest4/images/3.jpg',
            'img/rest4/images/4.jpg',
            'img/rest4/images/5.jpg',
            'img/rest4/images/6.jpg',
            'img/rest4/images/7.jpg',
            'img/rest4/images/8.jpg',
            'img/rest4/images/9.jpg',
            'img/rest4/images/10.jpg',
        ],
        menuImg: [
            'img/rest4/menu/1.jpg',
            'img/rest4/menu/2.jpg',
            'img/rest4/menu/3.jpg',
        ],
        workTimeStart: 12,
        workTimeEnd: 23,
        translation: {
            en: {
                name: 'Bistro o’Da!',
                city: 'Minsk',
                address: '18 Peter Mstislavets str',
                description: 'Bistro o\'da is a modern healthy cafe on the Promenade of the "Lighthouse of Minsk". The main concept of the cafe-bistro "O\'da!" is delicious healthy food. Here, dishes are prepared exclusively from natural ingredients, do not use semi-finished products, dyes and chemical additives. Instead of mayonnaise — cashew sauce. There are a lot of vegetables and nuts among the ingredients of the dishes, but the cuisine can not be called vegan. Bistro o\'da has already managed to fall in love not only with residents of the residential complex "Mayak Minsk" and the surrounding area, but also foreign guests.',
                cuisineType: [
                    'European',
                    'Italian',
                ],
            },
            ru: {
                name: 'Bistro o’Da!',
                city: 'Минск',
                address: 'ул. Петра Мстиславца 18',
                description: 'Bistro o’Da — это современное healthy-кафе на Променаде «Маяка Минска». Главная концепция кафе-бистро «О\'Да!» — вкусное здоровое питание. Здесь готовят блюда исключительно из натуральных ингредиентов, не используют полуфабрикаты, красители и химические добавки. Вместо майонеза — соус кешью. Среди ингредиентов блюд много овощей и орехов, но кухню не назовешь веганской. Bistro o’Da уже успели полюбить не только жители ЖК «Маяк Минска» и окрестностей, но и иностранные гости.',
                cuisineType: [
                    'Европейская',
                    'Итальянская',
                ],
            }
        }
    },
    {
        name: 'fabriq',
        city: 'Minsk',
        coordinates: [53.904986783294255, 27.552184779490897],
        phone: '+375445635555',
        rating: 4.2,
        averageCheck: 60,
        images: [
            'img/rest5/images/1.jpg',
            'img/rest5/images/2.jpg',
            'img/rest5/images/3.jpg',
            'img/rest5/images/4.jpg',
            'img/rest5/images/5.jpg',
            'img/rest5/images/6.jpg',
            'img/rest5/images/7.jpg',
            'img/rest5/images/8.jpg',
            'img/rest5/images/9.jpg',
            'img/rest5/images/10.jpg',
            'img/rest5/images/11.jpg',
            'img/rest5/images/12.jpg',
            'img/rest5/images/13.jpg',
            'img/rest5/images/14.jpg',
            'img/rest5/images/15.jpg',
        ],
        menuImg: [
            'img/rest5/menu/1.jpg',
            'img/rest5/menu/2.jpg',
            'img/rest5/menu/3.jpg',
            'img/rest5/menu/4.jpg',
            'img/rest5/menu/5.jpg',
            'img/rest5/menu/6.jpg',
            'img/rest5/menu/7.jpg',
        ],
        workTimeStart: 12,
        workTimeEnd: 24,
        translation: {
            en: {
                name: 'fabriq',
                city: 'Minsk',
                address: 'ave. Winners 1',
                description: 'The project is well-known largely due to an impressive budget: more than $ 1.5 million has been invested in the institution. But the gastronomic perspective is no less ambitious: Fabric plans to give a powerful boost to the restaurant industry in Minsk. The scale of the kitchen allows you to experiment: there is a zone where Neapolitan pizza is prepared, a zone with a hosper, a raw bar (raw bar), a pastry shop, hot and cold shops.',
                cuisineType: [
                    'Italian',
                ],
            },
            ru: {
                name: 'fabriq',
                city: 'Минск',
                address: 'пр-т. Победителей 1, Минск',
                description: 'Проект на слуху во многом благодаря впечатляющему бюджету: в заведение вложено более $1,5 миллиона. Но гастрономическая перспектива не менее масштабна: в Fabric (Фабрик) планируют дать мощный толчок ресторанной индустрии Минска. Масштаб кухни позволяет экспериментировать: есть зона, где готовят неаполитанскую пиццу, зона с хоспером, raw-бар (сырой бар), кондитерский цех, горячий и холодный цеха. ',
                cuisineType: [
                    'Итальянская',
                ],
            }
        }
    },
    {
        name: 'La Scala Trattoria Ignazio',
        city: 'Minsk',
        coordinates: [53.90015009265239, 27.544925672080417],
        phone: '+375293119999',
        rating: 4.6,
        averageCheck: 55,
        images: [
            'img/rest7/images/1.jpg',
            'img/rest7/images/2.jpg',
            'img/rest7/images/3.jpg',
            'img/rest7/images/4.jpg',
            'img/rest7/images/5.jpg',
        ],
        menuImg: [
            'img/rest7/menu/1.jpg',
            'img/rest7/menu/2.jpg',
            'img/rest7/menu/3.jpg',
            'img/rest7/menu/4.jpg',
            'img/rest7/menu/5.jpg',
            'img/rest7/menu/6.jpg',
        ],
        workTimeStart: 12,
        workTimeEnd: 24,
        translation: {
            en: {
                name: 'La Scala Trattoria Ignazio',
                city: 'Minsk',
                address: '36 Nemiga str.',
                description: 'A traditional Italian trattoria is a restaurant where it is always delicious and cozy at home. This is the main rule. La Scala Trattoria Ignazio was created just in this spirit – informal, hospitable and with true Italian cuisine. Even the products that are prepared here are mainly from Italy.',
                cuisineType: [
                    'Italian',
                ],
            },
            ru: {
                name: 'La Scala Trattoria Ignazio',
                city: 'Минск',
                address: 'ул. Немига 36',
                description: 'Традиционная итальянская траттория – ресторан, в котором всегда вкусно и по-домашнему уютно. Это главное правило. La Scala Trattoria Ignazio создана как раз в таком духе – неформальном, гостеприимном и с истинно итальянской кухней. Даже продукты, из которых здесь готовят – в основном из Италии.',
                cuisineType: [
                    'Итальянская',
                ],
            }
        }
    },
    {
        name: 'Falcone',
        city: 'Minsk',
        coordinates: [53.90015009265239, 27.544925672080417],
        phone: '+375293119999',
        rating: 4.4,
        averageCheck: 80,
        images: [
            'img/rest8/images/1.jpg',
            'img/rest8/images/2.jpg',
            'img/rest8/images/3.jpg',
            'img/rest8/images/4.jpg',
            'img/rest8/images/5.jpg',
            'img/rest8/images/6.jpg',
            'img/rest8/images/7.jpg',
            'img/rest8/images/8.jpg',
            'img/rest8/images/9.jpg',
            'img/rest8/images/10.jpg',
            'img/rest8/images/11.jpg',
        ],
        menuImg: [
            'img/rest8/menu/1.jpg',
            'img/rest8/menu/2.jpg',
            'img/rest8/menu/3.jpg',
            'img/rest8/menu/4.jpg',
            'img/rest8/menu/5.jpg',
            'img/rest8/menu/6.jpg',
            'img/rest8/menu/7.jpg',
        ],
        workTimeStart: 13,
        workTimeEnd: 23,
        translation: {
            en: {
                name: 'Falcone',
                city: 'Minsk',
                address: '36 Nemiga str.',
                description: 'The Falcone restaurant ("Falcon") can truly be considered the property of the city of Minsk. More than ten years ago, the Falcone Italian restaurant opened its doors to those who appreciate the harmony of taste and beauty of dishes, was one of the first to create a cult of Italian cuisine in Minsk, and today continues the traditions of Italian gastronomy in a modern presentation.',
                cuisineType: [
                    'Italian',
                ],
            },
            ru: {
                name: 'Falcone',
                city: 'Минск',
                address: 'ул. Немига 36',
                description: 'Ресторан Falcone («Фалькон») поистине можно считать достоянием города Минска. Более десяти лет назад ресторан итальянской кухни Falcone распахнул свои двери для тех, кто ценит гармонию вкуса и красоту блюд, одним из первых создал культ итальянской кухни в Минске, и сегодня продолжает традиции итальянской гастрономии в современной подаче.',
                cuisineType: [
                    'Итальянская',
                ],
            }
        }
    },
    {
        name: 'Ronin',
        city: 'Minsk',
        coordinates: [53.92740440552631, 27.573551532657156],
        phone: '+375291572905',
        rating: 4.6,
        averageCheck: 20,
        images: [
            'img/rest9/images/1.jpg',
            'img/rest9/images/2.jpg',
            'img/rest9/images/3.jpg',
            'img/rest9/images/4.jpg',
            'img/rest9/images/5.jpg',
            'img/rest9/images/6.jpg',
            'img/rest9/images/7.jpg',
            'img/rest9/images/8.jpg',
            'img/rest9/images/9.jpg',
            'img/rest9/images/10.jpg',
        ],
        menuImg: [
            'img/rest9/menu/1.jpg',
            'img/rest9/menu/2.jpg',
            'img/rest9/menu/3.jpg',
            'img/rest9/menu/4.jpg',
            'img/rest9/menu/5.jpg',
            'img/rest9/menu/6.jpg',
            'img/rest9/menu/7.jpg',
            'img/rest9/menu/8.jpg',
            'img/rest9/menu/9.jpg',
            'img/rest9/menu/10.jpg',
            'img/rest9/menu/11.jpg',
            'img/rest9/menu/12.jpg',
            'img/rest9/menu/13.jpg',
            'img/rest9/menu/14.jpg',
            'img/rest9/menu/15.jpg',
        ],
        workTimeStart: 11,
        workTimeEnd: 24,
        translation: {
            en: {
                name: 'Ronin',
                city: 'Minsk',
                address: '78 Maxim Bogdanovich str.',
                description: 'Japanese rastaurant.',
                cuisineType: [
                    'Jananese',
                ],
            },
            ru: {
                name: 'Ронин',
                city: 'Минск',
                address: 'ул. Максима Богдановича 78',
                description: 'Японский ресторан',
                cuisineType: [
                    'Японская',
                ],
            }
        }
    },
    {
        name: 'View',
        city: 'Minsk',
        coordinates: [53.9076911610173, 27.549872671529002],
        phone: '+375447028888',
        rating: 4.4,
        averageCheck: 45,
        images: [
            'img/rest10/images/1.jpg',
            'img/rest10/images/2.jpg',
            'img/rest10/images/3.jpg',
            'img/rest10/images/4.jpg',
            'img/rest10/images/5.jpg',
            'img/rest10/images/6.jpg',
            'img/rest10/images/7.jpg',
            'img/rest10/images/8.jpg',
            'img/rest10/images/9.jpg',
            'img/rest10/images/10.jpg',
            'img/rest10/images/11.jpg',
            'img/rest10/images/12.jpg',
            'img/rest10/images/13.jpg',
            'img/rest10/images/14.jpg',
        ],
        menuImg: [
            'img/rest10/menu/1.jpg',
            'img/rest10/menu/2.jpg',
            'img/rest10/menu/3.jpg',
            'img/rest10/menu/4.jpg',
        ],
        workTimeStart: 11,
        workTimeEnd: 23,
        translation: {
            en: {
                name: 'View',
                city: 'Minsk',
                address: 'ave. Winners 7A',
                description: 'Many people dream of reaching for heaven, but not everyone knows that it is actually real. This opportunity is provided by The View restaurant, which is located at an altitude of 100 meters in the very center of the city, not far from the Nemiga metro station.',
                cuisineType: [
                    'European',
                    'Italian',
                    'Russian',
                ],
            },
            ru: {
                name: 'View',
                city: 'Минск',
                address: 'пр-т. Победителей 7А',
                description: 'Многие мечтают дотянуться до небес, но не каждый знает, что это на самом деле реально. Такую возможность предоставляет ресторан The Viеw, который находится на высоте 100 метров в самом центре города, недалеко от ст. м. «Немига».',
                cuisineType: [
                    'Европейская',
                    'Итальянская',
                    'Русская',
                ],
            }
        }
    },
    {
        name: 'Berezka',
        city: 'Minsk',
        coordinates: [53.90878692055452, 27.576209985024263],
        phone: '+375291404343',
        rating: 4.3,
        averageCheck: 25,
        images: [
            'img/rest10/images/1.jpg',
            'img/rest10/images/2.jpg',
            'img/rest10/images/3.jpg',
            'img/rest10/images/4.jpg',
            'img/rest10/images/5.jpg',
            'img/rest10/images/6.jpg',
            'img/rest10/images/7.jpg',
            'img/rest10/images/8.jpg',
            'img/rest10/images/9.jpg',
            'img/rest10/images/10.jpg',
            'img/rest10/images/11.jpg',
            'img/rest10/images/12.jpg',
            'img/rest10/images/13.jpg',
            'img/rest10/images/14.jpg',
        ],
        menuImg: [
            'img/rest10/menu/1.jpg',
            'img/rest10/menu/2.jpg',
            'img/rest10/menu/3.jpg',
            'img/rest10/menu/4.jpg',
        ],
        workTimeStart: 9,
        workTimeEnd: 24,
        translation: {
            en: {
                name: 'Berezka',
                city: 'Minsk',
                address: 'Independence Ave., 40',
                description: 'The name native to the townspeople, modern interiors and fusion of Belarusian, European and Asian cuisines — all this is about the cafe-restaurant "Berezka". The establishment is located in one of the most profitable locations in the city — near Victory Square. A cafe-pastry shop, a wine bar, a lounge area and a summer terrace — there is a suitable place for everyone here.',
                cuisineType: [
                    'European',
                    'Italian',
                    'Jananese',
                ],
            },
            ru: {
                name: 'Березка',
                city: 'Минск',
                address: 'пр-т Независимости, 40',
                description: 'Родное для горожан название, современные интерьеры и фьюжн из белорусской, европейской и азиатской кухонь — все это про кафе-ресторан «Березка». Заведение находится в одной из самых выгодных локаций в городе — возле площади Победы. Кафе-кондитерская, винный бар, лаунж-зона и летняя терраса — подходящее по атмосфере место найдется здесь для каждого.',
                cuisineType: [
                    'Европейская',
                    'Итальянская',
                    'Японская',
                ],
            }
        }
    },
    {
        name: 'Berezka',
        city: 'Minsk',
        coordinates: [53.90878692055452, 27.576209985024263],
        phone: '+375291404343',
        rating: 4.3,
        averageCheck: 25,
        images: [
            'img/rest11/images/1.jpg',
            'img/rest11/images/2.jpg',
            'img/rest11/images/3.jpg',
            'img/rest11/images/4.jpg',
            'img/rest11/images/5.jpg',
            'img/rest11/images/6.jpg',
            'img/rest11/images/7.jpg',
            'img/rest11/images/8.jpg',
            'img/rest11/images/9.jpg',
            'img/rest11/images/10.jpg',
            'img/rest11/images/11.jpg',
            'img/rest11/images/12.jpg',
            'img/rest11/images/13.jpg',
            'img/rest11/images/14.jpg',
            'img/rest11/images/15.jpg',
            'img/rest11/images/16.jpg',
            'img/rest11/images/17.jpg',
        ],
        menuImg: [
            'img/rest11/menu/1.jpg',
            'img/rest11/menu/2.jpg',
        ],
        workTimeStart: 9,
        workTimeEnd: 24,
        translation: {
            en: {
                name: 'Berezka',
                city: 'Minsk',
                address: 'Independence Ave., 40',
                description: 'The name native to the townspeople, modern interiors and fusion of Belarusian, European and Asian cuisines — all this is about the cafe-restaurant "Berezka". The establishment is located in one of the most profitable locations in the city — near Victory Square. A cafe-pastry shop, a wine bar, a lounge area and a summer terrace — there is a suitable place for everyone here.',
                cuisineType: [
                    'Jananese',
                ],
            },
            ru: {
                name: 'Березка',
                city: 'Минск',
                address: 'пр-т Независимости, 40',
                description: 'Родное для горожан название, современные интерьеры и фьюжн из белорусской, европейской и азиатской кухонь — все это про кафе-ресторан «Березка». Заведение находится в одной из самых выгодных локаций в городе — возле площади Победы. Кафе-кондитерская, винный бар, лаунж-зона и летняя терраса — подходящее по атмосфере место найдется здесь для каждого.',
                cuisineType: [
                    'Японская',
                ],
            }
        }
    },
    {
        name: 'Hanuma',
        city: 'Kazan',
        coordinates: [55.79046278379456, 49.10684484140008],
        phone: '+79178960369',
        rating: 4.8,
        averageCheck: 15,
        images: [
            'img/rest13/images/1.jpg',
            'img/rest13/images/2.jpg',
            'img/rest13/images/3.jpg',
            'img/rest13/images/4.jpg',
            'img/rest13/images/5.jpg',
            'img/rest13/images/6.jpg',
            'img/rest13/images/7.jpg',
            'img/rest13/images/8.jpg',
            'img/rest13/images/9.jpg',
            'img/rest13/images/10.jpg',
            'img/rest13/images/11.jpg',
            'img/rest13/images/12.jpg',
            'img/rest13/images/13.jpg',
            'img/rest13/images/14.jpg',
        ],
        menuImg: [
            'img/rest13/menu/1.jpg',
            'img/rest13/menu/2.jpg',
            'img/rest13/menu/3.jpg',
            'img/rest13/menu/4.jpg',
            'img/rest13/menu/5.jpg',
            'img/rest13/menu/6.jpg',
            'img/rest13/menu/7.jpg',
            'img/rest13/menu/8.jpg',
        ],
        workTimeStart: 10,
        workTimeEnd: 20,
        translation: {
            en: {
                name: 'Hanuma',
                city: 'Kazan',
                address: '68 Bauman Str',
                description: 'Cozy self-service cafe with a non-standard menu in the very center of the city. Our motto: Eco, Aesthetics & Halal',
                cuisineType: [
                    'European',
                    'Tatar',
                    'Russian',
                ],
            },
            ru: {
                name: 'Ханума',
                city: 'Казань',
                address: 'ул. Баумана, 68',
                description: 'Уютное кафе самообслуживания с нестандартным меню в самом центре города. Наш девиз: Эко, эстетика & халяль',
                cuisineType: [
                    'Европейская',
                    'Татарская',
                    'Русская',
                ],
            }
        }
    },
    {
        name: 'Pasta Bar',
        city: 'Kazan',
        coordinates: [55.79096105029688, 49.108287018112456],
        phone: '+79033405005',
        rating: 4.4,
        averageCheck: 25,
        images: [
            'img/rest14/images/1.jpg',
            'img/rest14/images/2.jpg',
            'img/rest14/images/3.jpg',
            'img/rest14/images/4.jpg',
            'img/rest14/images/5.jpg',
            'img/rest14/images/6.jpg',
            'img/rest14/images/7.jpg',
            'img/rest14/images/8.jpg',
            'img/rest14/images/9.jpg',
            'img/rest14/images/10.jpg',
        ],
        menuImg: [
            'img/rest14/menu/1.jpg',
            'img/rest14/menu/2.jpg',
            'img/rest14/menu/3.jpg',
            'img/rest14/menu/4.jpg',
            'img/rest14/menu/5.jpg',
        ],
        workTimeStart: 8,
        workTimeEnd: 24,
        translation: {
            en: {
                name: 'Pasta Bar',
                city: 'Kazan',
                address: '68 Bauman Str',
                description: 'Our bar is a place where the proven technology of cooking traditional Italian dishes is combined with the warm atmosphere of evening conversations and vivid memories for years to come.',
                cuisineType: [
                    'European',
                    'Italian',
                ],
            },
            ru: {
                name: 'Паста Бар',
                city: 'Казань',
                address: 'ул. Баумана, 68',
                description: ' Наш бар - это место, где отработанная технология приготовления традиционных итальянских блюд объединяется с тёплой атмосферой вечерних бесед и яркими воспоминаниями на годы вперёд.',
                cuisineType: [
                    'Европейская',
                    'Итальянская',
                ],
            }
        }
    },
    {
        name: 'Prosto Cafe & Kitchen',
        city: 'Kazan',
        coordinates: [55.8239840333046, 49.1105238428549],
        phone: '+79950070661',
        rating: 4.9,
        averageCheck: 20,
        images: [
            'img/rest16/images/1.jpg',
            'img/rest16/images/2.jpg',
            'img/rest16/images/3.jpg',
            'img/rest16/images/4.jpg',
            'img/rest16/images/5.jpg',
        ],
        menuImg: [
            'img/rest16/menu/1.jpg',
            'img/rest16/menu/2.jpg',
        ],
        workTimeStart: 11,
        workTimeEnd: 22,
        translation: {
            en: {
                name: 'Prosto Cafe & Kitchen',
                city: 'Kazan',
                address: '36 Absalyamova str, BC Nautilus',
                description: 'Cozy coffee shop in the heart of the boulevard "White Flowers", located on Absalyamova Street. Here you can have a hearty breakfast, a delicious lunch and dinner, hold a business meeting, a romantic evening. The menu offers dishes of European cuisine in an interesting presentation. A wide selection of drinks based on coffee tea, non-alcoholic cocktails and lemonades. There is a children`s menu for younger guests and every Sunday they also have master classes in cooking and drawing. We work daily from 8 am to 22 pm. Without lunch breaks and weekends. We are waiting for everyone to visit! We will be glad to see you!',
                cuisineType: [
                    'European',
                    'Italian',
                    'Russian'
                ],
            },
            ru: {
                name: 'Prosto Кофе & Кухня',
                city: 'Казань',
                address: 'Абсалямова улица, 36 БЦ Наутилус',
                description: 'Уютная кофейня в самом сердце бульвара "Белые Цветы",расположенного по улице Абсалямова. У нас вы сможете сытно позавтракать, вкусно пообедать и поужинать,провести деловую встречу, романтический вечер. В меню представлены блюда европейской кухни в интересной подаче. Широкий выбор напитков на основе кофе чая,безалкогольных коктейлей и лимонадов. Для маленьких гостей действует детское меню и каждое воскресенье для них же проводятся мастер-классы по приготовлению блюд и рисованию. Работаем ежедневно с 8 утра до 22 вечера. Без перерывов на обед и выходных. Ждём всех в гости! Будем рады вас видеть!',
                cuisineType: [
                    'Европейская',
                    'Итальянская',
                    'Русская',
                ],
            }
        }
    },
    {
        name: 'Kremlin',
        city: 'Kazan',
        coordinates: [55.79375779440525, 49.11006267254448],
        phone: '+78432937070',
        rating: 4.5,
        averageCheck: 40,
        images: [
            'img/rest18/images/1.jpg',
            'img/rest18/images/2.jpg',
            'img/rest18/images/3.jpg',
            'img/rest18/images/4.jpg',
            'img/rest18/images/5.jpg',
            'img/rest18/images/6.jpg',
            'img/rest18/images/7.jpg',
            'img/rest18/images/8.jpg',
            'img/rest18/images/9.jpg',
            'img/rest18/images/10.jpg',
            'img/rest18/images/11.jpg',
            'img/rest18/images/12.jpg',
            'img/rest18/images/13.jpg',
            'img/rest18/images/14.jpg',
        ],
        menuImg: [
            'img/rest18/menu/1.jpg',
            'img/rest18/menu/2.jpg',
            'img/rest18/menu/3.jpg',
            'img/rest18/menu/4.jpg',
            'img/rest18/menu/5.jpg',
            'img/rest18/menu/6.jpg',
            'img/rest18/menu/7.jpg',
            'img/rest18/menu/8.jpg',
        ],
        workTimeStart: 9,
        workTimeEnd: 24,
        translation: {
            en: {
                name: 'Kremlin',
                city: 'Kazan',
                address: 'Profsouznaya str, 4',
                description: 'The quiet and cozy restaurant Kremlin is located in the heart of Kazan, within walking distance from the Kremlin and the main pedestrian street of the capital of Tatarstan – Bauman Street. The restaurant building is a 19th-century building designed by architect Petondi. Once the house of the merchant Potekhin was located here.',
                cuisineType: [
                    'European',
                    'Russian'
                ],
            },
            ru: {
                name: 'Кремлин',
                city: 'Казань',
                address: 'Профсоюзная ул., 4',
                description: 'Тихий и уютный ресторан Кремлин — расположился в самом сердце Казани, в шаговой доступности от Кремля и главной пешеходной улицы столицы Татарстана – ул. Баумана. Здание ресторана является постройкой 19 века, выполненной архитектором Петонди. Когда-то здесь располагался дом купца Потехина.',
                cuisineType: [
                    'Европейская',
                    'Русская',
                ],
            }
        }
    },
    {
        name: 'One Season',
        city: 'Kazan',
        coordinates: [55.79190928664455, 49.125117870249156],
        phone: '+79196433063',
        rating: 4.1,
        averageCheck: 25,
        images: [
            'img/rest19/images/1.jpg',
            'img/rest19/images/2.jpg',
            'img/rest19/images/3.jpg',
            'img/rest19/images/4.jpg',

        ],
        menuImg: [
            'img/rest19/menu/1.jpg',
            'img/rest19/menu/2.jpg',
            'img/rest19/menu/3.jpg',
            'img/rest19/menu/4.jpg',
            'img/rest19/menu/5.jpg',
            'img/rest19/menu/6.jpg',
            'img/rest19/menu/7.jpg',
            'img/rest19/menu/8.jpg',
        ],
        workTimeStart: 11,
        workTimeEnd: 24,
        translation: {
            en: {
                name: 'One Season',
                city: 'Kazan',
                address: 'Pushkin Street, 34B',
                description: 'One Season is a corner of greenery and atmosphere in the very center of Kazan. The outdoor terrace allows you to fully experience all the colors of a short summer. Having lunch on weekdays basking in the sun, or dancing on a weekend night to DJ sets and a light summer wind - you choose! The restaurant is open only in summer and we offer you excellent service!',
                cuisineType: [
                    'Japanese',
                ],
            },
            ru: {
                name: 'One Season',
                city: 'Казань',
                address: 'ул. Пушкина, 34В',
                description: 'One Season - это уголок зелени и атмосферы в самом центре города Казань. Открытая терраса даёт в полной мере ощутить все краски короткого лета. Обедать по будням греясь на солнце, или танцевать в ночь выходного дня под DJ-сэты и легкий летний ветер - выбирать вам! Ресторан работает только в летнее время и мы предлагаем вам отличный сервис!',
                cuisineType: [
                    'Японская',
                ],
            }
        }
    },
    {
        name: 'Rivera',
        city: 'Kazan',
        coordinates: [55.81547747531936, 49.129934724189454],
        phone: '+79196433063',
        rating: 4.7,
        averageCheck: 50,
        images: [
            'img/rest21/images/1.jpg',
            'img/rest21/images/2.jpg',
            'img/rest21/images/3.jpg',
            'img/rest21/images/4.jpg',
            'img/rest21/images/5.jpg',
            'img/rest21/images/6.jpg',

        ],
        menuImg: [
            'img/rest21/menu/1.jpg',
            'img/rest21/menu/2.jpg',
            'img/rest21/menu/3.jpg',
            'img/rest21/menu/4.jpg',
            'img/rest21/menu/5.jpg',
            'img/rest21/menu/6.jpg',
            'img/rest21/menu/7.jpg',
        ],
        workTimeStart: 10,
        workTimeEnd: 23,
        translation: {
            en: {
                name: 'Rivera',
                city: 'Kazan',
                address: '1A Fatykh Amirkhan str.',
                description: 'There are dishes of European and national cuisine, as well as a special children`s menu.',
                cuisineType: [
                    'European',
                    'Italian',
                    'Tatar'
                ],
            },
            ru: {
                name: 'Ривьера',
                city: 'Казань',
                address: 'ул. Фатыха Амирхана, 1А',
                description: 'Здесь представлены блюда европейской и национальной кухни, а также специальное детское меню.',
                cuisineType: [
                    'Европейская',
                    'Итальянская',
                    'Татарская'
                ],
            }
        }
    },
    {
        name: 'Saffron Brown',
        city: 'Kazan',
        coordinates: [55.781538647131875, 49.13360311391584],
        phone: '+78432781616',
        rating: 4.3,
        averageCheck: 45,
        images: [
            'img/rest22/images/1.jpg',
            'img/rest22/images/2.jpg',
            'img/rest22/images/3.jpg',
            'img/rest22/images/4.jpg',
            'img/rest22/images/5.jpg',
            'img/rest22/images/6.jpg',
            'img/rest22/images/7.jpg',
            'img/rest22/images/8.jpg',
            'img/rest22/images/9.jpg',

        ],
        menuImg: [
            'img/rest22/menu/1.jpg',
            'img/rest22/menu/2.jpg',
            'img/rest22/menu/3.jpg',
            'img/rest22/menu/4.jpg',
            'img/rest22/menu/5.jpg',
            'img/rest22/menu/6.jpg',
        ],
        workTimeStart: 10,
        workTimeEnd: 22,
        translation: {
            en: {
                name: 'Saffron Brown',
                city: 'Kazan',
                address: 'St. Petersburg, 49',
                description: 'The cozy atmosphere of this place allows guests to relax after a hard day. Most visitors think that the staff here is creative. This restaurant has average prices. It has a modern interior.',
                cuisineType: [
                    'European',
                    'Uzbek'
                ],
            },
            ru: {
                name: 'Шафран Браун',
                city: 'Казань',
                address: 'ул. Петербургская, 49',
                description: 'Уютная атмосфера этого заведения позволяет гостям отдохнуть после тяжелого дня. Большинство посетителей считают, что персонал здесь креативный. В этом ресторане средние цены. Здесь современный интерьер.',
                cuisineType: [
                    'Европейская',
                    'Узбекская'
                ],
            }
        }
    },
    {
        name: 'IL SOLO',
        city: 'Kazan',
        coordinates: [55.83623087302037, 49.10401709602681],
        phone: '+78434598639',
        rating: 4.1,
        averageCheck: 100,
        images: [
            'img/rest23/images/1.jpg',
            'img/rest23/images/2.jpg',
            'img/rest23/images/3.jpg',
            'img/rest23/images/4.jpg',
            'img/rest23/images/5.jpg',
            'img/rest23/images/6.jpg',
            'img/rest23/images/7.jpg',
            'img/rest23/images/8.jpg',
            'img/rest23/images/9.jpg',
            'img/rest23/images/10.jpg',
            'img/rest23/images/11.jpg',

        ],
        menuImg: [
            'img/rest23/menu/1.jpg',
            'img/rest23/menu/2.jpg',
            'img/rest23/menu/3.jpg',
            'img/rest23/menu/4.jpg',
            'img/rest23/menu/5.jpg',
        ],
        workTimeStart: 8,
        workTimeEnd: 20,
        translation: {
            en: {
                name: 'IL SOLO',
                city: 'Kazan',
                address: '1 Marshal Chuikov str.',
                description: 'The cozy atmosphere of this place allows guests to relax after a hard day. Most visitors think that the staff here is creative. This restaurant has average prices. It has a modern interior.',
                cuisineType: [
                    'Italian',
                ],
            },
            ru: {
                name: 'IL SOLO',
                city: 'Казань',
                address: 'ул. Маршала Чуйкова, 1',
                description: 'Уютная атмосфера этого заведения позволяет гостям отдохнуть после тяжелого дня. Большинство посетителей считают, что персонал здесь креативный. В этом ресторане средние цены. Здесь современный интерьер.',
                cuisineType: [
                    'Итальянская',
                ],
            }
        }
    },
];

// db.forEach(el => el.translation = JSON.stringify(el.translation));

export default db;