import React from 'react';
import "./Home.css";
import Volunteers from '../Volunteers/Volunteers';

const Home = () => {
    return (
        <div>
            <h1>Home</h1>
            <h1>I GROW BY HELPING PEOPLE IN NEED.</h1>
            <input type="text" name="" id="" placeholder="Search... " />
            <button type="submit">Search</button>

            <Volunteers></Volunteers>
        </div>
    );
};

export default Home;