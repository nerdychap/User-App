import React from 'react'

const User = ({ user }) => {
    const { name: { title, first, last }, location: { city, country }, picture: { large } } = user;
    return (
        <div className="card" style={{}}>
            <img src={large} alt={`${first} ${last}`} style={{ maxWidth: "100%" }} className="card-img-top" />
            <div className="card-body">
                <h4 className="card-title">{title} {first} {last}</h4>
                <h6 className="card-title">{city}, {country}</h6>
            </div>
        </div>
    )
}

export default User;
