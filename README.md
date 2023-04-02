# RaViOle server
## Stack
1. TS
2. Node.js
3. Express
4. Prisma.js
5. PostgreSQL
## API examples

BASE URL: **https://restaurants-server-3.onrender.com**


### Create User:

- Example:
 [![image.jpg](https://i.postimg.cc/tCK3pQCw/image.jpg)](https://postimg.cc/9rBRYk9Y)

- URL : /register

- Method: POST

- Headers: 'Content-Type': 'application/json'

- URL Params: None

- Query Params: None

- Data Params

```
{
    login: string;
    email: string;
    phone: string;
    password: string;
}
```

- Success Response:

Code: 201 CREATED

Content:
```
{
    "id": 42,
    "login": "postman",
    "password": "111111",
    "email": "eeeee@eeee.ru",
    "phone": "+123456789",
    "bonusPoints": 0,
    "favourites": [],
    "reviews": [],
    "bookings": []
}
```



### Get All Restaurants

- Example:

https://restaurants-server-3.onrender.com/cafe/city/Minsk

(available two cities: Minsk and Kazan)

- URL: /cafe/city/

- Method: GET

- Headers: None

- URL Params: None

- Query Params: None

- Data Params: None

- Success Response: 

Code: 200 OK

<details>
<summary>Content:</summary>

```
[
    {
        "id": 5,
        "name": "Morella",
        "city": "Minsk",
        "coordinates": [
            53.90492754124381,
            27.53969105434474
        ],
        "phone": "+375296440464",
        "workTimeStart": 12,
        "workTimeEnd": 23,
        "rating": "3.9",
        "averageCheck": "30",
        "images": [
            "img/rest3/images/1.jpg",
            "img/rest3/images/2.jpg",
            "img/rest3/images/3.jpg",
            "img/rest3/images/4.jpg",
            "img/rest3/images/5.jpg"
        ],
        "menuImg": [
            "img/rest3/menu/1.jpg",
            "img/rest3/menu/2.jpg",
            "img/rest3/menu/3.jpg",
            "img/rest3/menu/4.jpg"
        ],
        "translation": "{\"en\":{\"name\":\"Morella\",\"city\":\"Minsk\",\"address\":\"2 Sukhaya str.\",\"description\":\"Morella is a cafe in the heart of the capital, where it is equally pleasant to enjoy a business brunch and a friendly dinner in the company of exquisite Spanish—Italian cuisine and a warm atmosphere.\",\"cuisineType\":[\"European\",\"Italian\"]},\"ru\":{\"name\":\"Morella\",\"city\":\"Минск\",\"address\":\"ул. Сухая, 2\",\"description\":\"Morella — это кафе в сердце столицы, где одинаково приятно насладиться деловым бранчем и дружеским ужином в компании изысканной испанско-итальянской кухни и душевной атмосферы.\",\"cuisineType\":[\"Европейская\",\"Итальянская\"]}}",
        "bookings": [
            {
                "id": 80,
                "cafeId": 5,
                "guestId": 5,
                "tableId": 2,
                "createdAt": "2023-02-26T11:36:12.312Z",
                "date": "2023-03-02T15:00:00.000Z",
                "duration": 1,
                "guestPhone": "+2345633355",
                "guestName": "Vitia",
                "guestAmount": 2,
                "status": "active",
                "guest": {
                    "id": 5,
                    "login": "oleg2",
                    "password": "111111",
                    "email": "oleg2@gmail.com",
                    "phone": "+12345678910",
                    "bonusPoints": 68
                }
            }
        ],
        "reviews": [
            {
                "id": 5,
                "cafeId": 5,
                "authorId": 30,
                "text": "Just had one of the most incredible meals of my life at Jungsik. I ate at the bar and had that selection. I expected it to be good but it far exceeded our expectations. The depth of flavours and selections played well with each other . The chef made sure to create food that fit in with some of my restrictions due to medical problems. The servers are very welcoming, spent the time to explain the menu and gave wonderful suggestions. Service impeccable. The desserts are works of art in looks and taste. Cocktail suggestions were spot on and a delight.",
                "rating": 3,
                "author": {
                    "id": 30,
                    "login": "ole",
                    "password": "111111",
                    "email": "g@h7.ty",
                    "phone": "+12377777777",
                    "bonusPoints": 25
                }
            },
            {
                "id": 27,
                "cafeId": 5,
                "authorId": 33,
                "text": "Bold statement and to be fair we didn’t really try anywhere else as this place was so good!! Try the garlic knots but if you are with your significant other make sure you both have them as the amount of garlic on them is obscene!!!  ",
                "rating": 5,
                "author": {
                    "id": 33,
                    "login": "Alex",
                    "password": "111111",
                    "email": "www@rrr.ty",
                    "phone": "+123456789",
                    "bonusPoints": 25
                }
            },
            {
                "id": 51,
                "cafeId": 5,
                "authorId": 34,
                "text": "High priced, overrated and disappointing overall. Had high expectations given the ratings. Service was mediocre except for our waitress. Busboys were eager to clear your plate before even finishing your entree. Vitello tasted like fried beef jerky. Last call at 10:20 PM meant not for drinks but for food. Really ??\nWon’t be coming back anytime soon… ",
                "rating": 3,
                "author": {
                    "id": 34,
                    "login": "JordanM",
                    "password": "111111",
                    "email": "etrfv@vfby.ty",
                    "phone": "+123456789",
                    "bonusPoints": 25
                }
            },
            {
                "id": 78,
                "cafeId": 5,
                "authorId": 36,
                "text": "We came here for our first night's dinner on a recent trip to NYC. While the food was good, the pasta was well cooked, and the service was adequate - there were just too many people crammed into this small restaurant. We sat a two-top right next to the large open window to the front patio, after sidling in between tightly crammed tables and encouraging the table next to us to remove their purses from our seats and hold them on their laps. The small space was made a bit more uncomfortable by having very large format menus. If the physical size of the menu is greater than the distance between tables - it makes things extra challenging. In addition, the poor staff had to try to get in and around the restaurant with essentially no extra space at the serving stations, making things rough to avoid a bit of jostling. ",
                "rating": 5,
                "author": {
                    "id": 36,
                    "login": "MatthewReynolds",
                    "password": "111111",
                    "email": "eeeee@eeee.ty",
                    "phone": "+123456789",
                    "bonusPoints": 25
                }
            },
            {
                "id": 94,
                "cafeId": 5,
                "authorId": 37,
                "text": "I'm continually surprised by the number of people (out-of-towners?) who rate this restaurant highly. The food is so-so (the watermelon-and-feta salad we had on this visit contained only microscopic crumbs of feta), and the service is chaotic. We had to order three items twice, including sugar for iced tea -- which a waiter brought but then returned a little while later to take back again (when we weren't finished using it yet). They're also eager to clear your plates as quickly as possible (even while you're still eating). We've been giving this place another shot every year or so since it opened, hoping it would get its act together, but no more ",
                "rating": 2,
                "author": {
                    "id": 37,
                    "login": "Christopher",
                    "password": "111111",
                    "email": "eee@hhh.ty",
                    "phone": "+123456789999",
                    "bonusPoints": 25
                }
            },
            {
                "id": 111,
                "cafeId": 5,
                "authorId": 38,
                "text": "We had the best filet mignon steaks we’ve ever eaten here. Mine was so tender I was half-way through before I realised I was cutting it with a normal knife.\nBruno and his staff were very friendly and welcoming.\nWould definitely recommend a visit. ",
                "rating": 5,
                "author": {
                    "id": 38,
                    "login": "Jeanne",
                    "password": "111111",
                    "email": "rtdc@fgvhj.ru",
                    "phone": "+1111111111",
                    "bonusPoints": 25
                }
            },
            {
                "id": 189,
                "cafeId": 5,
                "authorId": 5,
                "text": "charming from the outside, cute brasserie with a French atmosphere but clearly lacks warmth in the greetings. The food is average at best. Had the snails and were borderline “insipid”. best to avoid if you are French and do not want to be disappointed.",
                "rating": 4,
                "author": {
                    "id": 5,
                    "login": "oleg2",
                    "password": "111111",
                    "email": "oleg2@gmail.com",
                    "phone": "+12345678910",
                    "bonusPoints": 68
                }
            }
        ]
    },
    
    …
]
```
</details>