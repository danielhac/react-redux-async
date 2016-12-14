import React, {PropTypes} from 'react';
import {Link} from 'react-router';

const WineListRow = ({wine}) => {
    return (
        <tr>
            <td><Link to={'/wine/' + wine.id}>{wine.wineName}</Link></td>
            <td>{wine.region}</td>
            <td>{wine.brand}</td>
            <td>{wine.category}</td>
            <td>{wine.price}</td>
        </tr>
    );
};

WineListRow.propTypes = {
    wine: PropTypes.object.isRequired
};

export default WineListRow;
