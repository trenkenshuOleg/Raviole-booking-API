const func = async () => {
    const response = await fetch('https://restaurants-server-3.onrender.com/client/edit', {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            id: 1,
            email: 'eeeee@mail',
            phone: '--------',
        }),
    });
    console.log(await response.text());
};

const x = "{\"en\":{\"city\":\"Minsk\",\"name\":\"Ronin\",\"address\":\"78 Maxim Bogdanovich str.\",\"cuisineType\":[\"Japanese\"],\"description\":\"RONIN is an independent warrior who does not belong to either the clan or the master. He is free and open to everything new and interesting.\"},\"ru\":{\"city\":\"Минск\",\"name\":\"Ронин\",\"address\":\"ул. Максима Богдановича 78\",\"cuisineType\":[\"Японская\"],\"description\":\"RONIN — независимый воин, не принадлежащий ни клану, ни хозяину. Он свободен и открыт всему новому и интересному.\"}}"


const funcUpd = async () => {
    const response = await fetch('http://localhost:3003/client/5', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    });
    console.log(await response.json());
};

const addFav = async () => {
    const response = await fetch('https://restaurants-server-3.onrender.com/favourites/5/1', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
    });
    console.log(await response.json())
}

addFav();
//func();