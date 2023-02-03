const func = async () => {
    const response = await fetch('https://restaurants-server.onrender.com/register', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            login: 'oleg22',
            password: '111111j',
            email: 'ol@eg2klj',
            phone: '+3752897',
        }),
    });
    console.log(await response.json());
};

func();