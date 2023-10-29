import React from 'react';
import "./AddVolunteer.css";

const AddVolunteer = () => {

    const handleVolunteerRegister = async (event) => {
        event.preventDefault();
        // console.log(event)
        const name = event.target.fullName.value;
        const email = event.target.email.value;
        const date = event.target.date.value;
        const description = event.target.description.value;
        const activities = event.target.activities.value;
        console.log(name, email, date, description, activities);

        const volunteerRegister = { name, email, date, description, activities };
        const url = `http://localhost:5000/volunteers`;
        fetch(url, {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(volunteerRegister)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result);
            });

    };

    return (
        <div>
            <h1>AddVolunteer</h1>
            <img src="../../assets/logos/Group 1329.png" alt="Volunteer Network logo" />
            <div>
                <h2>Register as a Volunteer</h2>
                <form onSubmit={handleVolunteerRegister} action="">
                    <input type="text" name="fullName" id="" />
                    <input type="email" name="email" id="" />
                    <input type="date" name="date" id="" />
                    <input type="text" name="description" id="" />
                    <input type="text" name="activities" id="" />
                    <input type="submit" value="Sign Up" />
                </form>
            </div>
        </div>
    );
};

export default AddVolunteer;