import React from 'react';
import "./NavBar.css";
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <div>
            <h1>NavBar</h1>
            <nav>
                <div>
                    <Link to="/">
                    </Link>
                    <img src="../../assets/logos/Group 1329.png" alt="Volunteer Network logo" />
                </div>
                <div>
                    <Link to="/">Home</Link>
                    <Link to="/donation">Donation</Link>
                    <Link to="/events">Events</Link>
                    <Link to="/blogs">Blogs</Link>
                    <Link to="/signup">Sign-Up</Link>
                    <Link to="/signin">Sign-In</Link>
                    {/* <Link to="/signout">Sing Out</Link> */}
                    <Link to="/admin">Admin</Link>
                </div>
            </nav>
        </div>
    );
};

export default NavBar;