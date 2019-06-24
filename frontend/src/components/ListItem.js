import React from 'react';
import { Link } from 'react-router-dom';

const ListItem = ({ name, applicationId }) => {
    return (
        <li>
            <h2>{name}</h2>
            {applicationId ? <Link  to={`/applications/${applicationId}`} name={name} >Application</Link> : ""}
        </li>
    );
};

export default ListItem;
