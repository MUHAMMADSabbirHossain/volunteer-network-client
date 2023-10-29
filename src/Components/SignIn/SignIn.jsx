import React from 'react';
import "./SignIn.css";
import { Link } from 'react-router-dom';

const SignIn = () => {
    return (
        <div>
            <h1>Sign In</h1>
            <img src="../../assets/logos/Group 1329.png" alt="Volunteer Network logo" />
            <div>
                <h2>Login With</h2>
                <div>
                    <p>Continue with Google</p>
                </div>
                <p>Don't have an account? <Link to="/signup">Register Now.</Link></p>
            </div>
        </div>
    );
};

export default SignIn;