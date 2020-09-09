import React, { useContext, useEffect } from 'react'
import { UsersContext } from '../App'
import { Link } from 'react-router-dom';
import User from '../components/User';
const Homepage = () => {
    const users = useContext(UsersContext);
    const userList = users.map((user, ind) => {
        return (<div id="user-link" key={`${user.phone}`}>
            <Link to={`/${ind + 1}`}><User user={user} /></Link>
        </div>);
    })
    useEffect(() => {
        document.title = `User App`;
    }
    );
    return (
        <div>
            <h3 className="text-center text-uppercase  m-3">Users </h3>
            <section >
                {userList}
            </section>

        </div>
    )
}

export default Homepage;
