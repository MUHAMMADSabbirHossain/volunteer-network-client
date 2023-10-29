import React, { useEffect, useState } from 'react';

const useVolunteers = () => {

    const [volunteers, setVolunteers] = useState([]);
    useEffect(() => {
        const url = `http://localhost:5000/volunteers`;
        fetch(url)
            .then(res => res.json())
            .then(data => setVolunteers(data));
    }, []);
    return [volunteers, setVolunteers];
};

export default useVolunteers;