const func = async () => {
    const response = await fetch('https://restaurants-server.onrender.com/register', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            login: 'oleg2',
            password: '111111',
            email: 'ol@eg2',
            phone: '+3752',
        }),
    });
    console.log(await response.json());
};

func();