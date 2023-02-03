const func = async () => {
    const response = await fetch('https://restaurants-server.onrender.com/register', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            login: 'oleg',
            password: '111111',
            email: 'ol@eg',
            phone: '+375',
        }),
    });
    console.log(await response.json());
};

func();