import React from 'react';
import { useParams } from 'react-router-dom';
import Contact from '../pages/sub-pages/Contact';
import Other from '../pages/sub-pages/Other';
import Personal from '../pages/sub-pages/Personal';

const Tab = ({ user }) => {
    const { tab } = useParams();
    switch (tab) {
        case 'contact':
            return <Contact user={user} />
        case 'other':
            return <Other user={user} />
        case 'personal':
            return <Personal user={user} />
        default:
            return <h1>Pick Tab</h1>
    }
}

export default Tab;
