import React, { useContext, useEffect } from 'react'
import { useRouteMatch, useParams, Switch, Route } from 'react-router-dom';
import { UsersContext } from '../App';
import Tab from '../components/Tab';
import TabLinks from '../components/TabLinks';
const FullProfile = () => {
    const users = useContext(UsersContext);
    const { url } = useRouteMatch();
    const { userId } = useParams();
    const user = users[userId - 1];
    const { name: { title, first, last }, location: { city, country }, picture: { large }, id } = user;
    useEffect(() => {
        document.title = `User: ${first} ${last}`;
    }
    );
    return (
        <div>
            <div id="full-profile" className="card clearfix">
                <img src={large} alt={`${first} {last}`} />
                <div className="card-body" >
                    <h4 className="card-title">Name: {title} {first} {last}</h4>
                    <h5 >Location: {city}, {country}</h5>
                    <h5>ID Name: {id.name}</h5>
                    <h5>ID Number: {id.value}</h5>

                </div>
            </div>
            <TabLinks url={url} />
            <Switch>
                <Route path={`/:userId/:tab`} render={() => <Tab user={user} />} />
            </Switch>
        </div>
    )
}

export default FullProfile;
