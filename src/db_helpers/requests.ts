const func = async () => {
    const response = await fetch('http://localhost:3003/favourite/5/2', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({}),
    });
    console.log(await response.text());
};

func();