import React from 'react';

const Contact = ({ user }) => {
    const { phone, email } = user;
    return (
        <article>
            <div>
                <h5>Phone</h5>
                <p>{phone}</p>
            </div>
            <div>
                <h5>Email</h5>
                <p>{email}</p>
            </div>
        </article>
    )
}

export default Contact
