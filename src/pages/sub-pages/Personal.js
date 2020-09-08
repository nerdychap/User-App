import React from 'react';
import moment from 'moment';

const Personal = ({ user }) => {
    const { dob, gender, location: { city, country, state, street }, name: { title, first, last }, nat } = user;
    const dateOfBirth = moment(dob.date.slice(0, 10)).format("D MMM yyy");
    return (
        <article>
            <div>
                <h5>Name</h5>
                <p>{title} {first} {last}</p>
            </div>
            <div>
                <h5>Gender</h5>
                <p>{gender}</p>
            </div>
            <div>
                <h5>Nationality</h5>
                <p>{nat}</p>
            </div>
            <div>
                <h5>Age</h5>
                <p>{dob.age}</p>
            </div>
            <div>
                <h5>Date of Birth</h5>
                <p>{dateOfBirth}</p>
            </div>
            <div>
                <h5>Country</h5>
                <p>{country}</p>
            </div>
            <div>
                <h5>State</h5>
                <p>{state}</p>
            </div>
            <div>
                <h5>City</h5>
                <p>{city}</p>
            </div>
            <div>
                <h5>Street</h5>
                <p>{street.name}</p>
            </div>
        </article>
    )
}

export default Personal
