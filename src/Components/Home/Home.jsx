import React from 'react';
import "./Home.css";
import Volunteers from '../Volunteers/Volunteers';
import useVolunteers from '../../Hooks/UseVolunteers';
import { Link } from 'react-router-dom';

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
            {
                volunteers.map(volunteer => <div key={volunteer._id}>
                    {
                        volunteer._id
                    }
                    {
                        volunteer.imgage
                    }

                    <button><Link to="/addvolunteer">activity-name: {volunteer.name}</Link></button>
                </div>)
            }

        </div>
    );
};

export default Home;