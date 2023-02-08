const func = async () => {
    const response = await fetch('http://localhost:3003/bookings', {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            id: 1,
            tableId: 100,
        }),
    });
    console.log(await response.text());
};

func();