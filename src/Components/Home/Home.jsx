import React from 'react';
import "./Home.css";
import Volunteers from '../Volunteers/Volunteers';
import useVolunteers from '../../Hooks/UseVolunteers';

const Home = () => {

    const [volunteers, setVolunteers] = useVolunteers();
    console.log(volunteers);

    return (
        <div>
            <h1>Home</h1>
            <h1>I GROW BY HELPING PEOPLE IN NEED.</h1>
            <input type="text" name="" id="" placeholder="Search... " />
            <button type="submit">Search</button>

            <Volunteers></Volunteers>
            <h2>Search Result: {volunteers.length}</h2>

        </div>
    );
};

export default Home;