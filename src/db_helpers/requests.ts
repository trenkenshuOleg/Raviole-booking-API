const func = async () => {
    const response = await fetch('https://restaurants-server-2.onrender.com/cafe/7', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
        // body: JSON.stringify({}),
    });
    console.log(await response.text());
};

func();