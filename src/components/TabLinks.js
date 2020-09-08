import React from 'react'
import { NavLink } from 'react-router-dom';

const TabLinks = ({ url }) => {
    return (
        <ul className="nav justify-content-center nav-tabs">
            <li className="nav-item">
                <NavLink to={`${url}/personal`} className="nav-link" activeClassName="active">Personal</NavLink>
            </li>
            <li className="nav-item">
                <NavLink to={`${url}/contact`} className="nav-link" activeClassName="active">Contact</NavLink>
            </li>
            <li className="nav-item">
                <NavLink to={`${url}/other`} className="nav-link" activeClassName="active">Other</NavLink>
            </li>
        </ul>
    )
}

export default TabLinks;
