import React from 'react';

const Other = ({ user }) => {
    const { login: { username, password }, registered } = user;
    const registeredDate = JSON.stringify(new Date(registered.date));
    return (
        <article>
            <div>
                <h5>Username</h5>
                <p>{username}</p>
            </div>
            <div>
                <h5>Password</h5>
                <p>{password}</p>
            </div>
            <div>
                <h5>Registered Age</h5>
                <p>{registered.age}</p>
            </div>
            <div>
                <h5>Registered Date</h5>
                <p>{registeredDate}</p>
            </div>
        </article>
    )
}

export default Other;
