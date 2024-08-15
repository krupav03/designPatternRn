import React, { useState, useEffect } from 'react';
import UserPresenter from './UserPresenter';

function UserContainer() {
    const [data, setData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://jsonplaceholder.typicode.com/users');
                const users = await response.json();
                setData(users);
                console.log(users)
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
    }, []);

    return (
        <UserPresenter users={data} />
    );
}

export default UserContainer;
