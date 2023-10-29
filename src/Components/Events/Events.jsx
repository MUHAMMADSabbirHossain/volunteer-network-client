import React from 'react';
import "./Events.css";

const Events = () => {

    const handleVolunteerRegister = async (event) => {
        event.preventDefault();
        // console.log(event)
        const name = event.target.eventTitle.value;
        const date = event.target.date.value;
        const description = event.target.description.value;
        const eventImgLink = event.target.eventImgLink.value;
        console.log(name, date, description, eventImgLink);

        const volunteerRegister = { name, date, description, eventImgLink };
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
            <h1>Events</h1>

            <div>
                <h2>Register as a Volunteer</h2>
                <form onSubmit={handleVolunteerRegister} action="">
                    <label htmlFor="eventTitle">Event Title: </label>
                    <input type="text" name="eventTitle" id="" />
                    <label htmlFor="date">Event Date: </label>
                    <input type="date" name="date" id="" />
                    <label htmlFor="description">Description: </label>
                    <input type="textarea" name="description" id="" />
                    <label htmlFor="eventImgLink">Event Banner: </label>
                    <input type="text" name="eventImgLink" id="" />
                    <input type="submit" value="Submit" />
                </form>
            </div>
        </div>
    );
};

export default Events;