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

// const func = async () => {
//     const response = await fetch('http://localhost:3003/client/5', {
//         method: 'GET',
//         headers: {
//             'Content-Type': 'application/json',
//         },
//     });
//     console.log(await response.json());
// };

func();