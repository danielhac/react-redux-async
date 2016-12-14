import React, {PropTypes} from 'react';
import WineListRow from './WineListRow';

const WineList = ({wines}) => {
    return (
        <table className="table">
            <thead>
            <tr>
                <th>Wine Name</th>
                <th>Region</th>
                <th>Brand</th>
                <th>Category</th>
                <th>Price</th>
            </tr>
            </thead>
            <tbody>
            {wines.map(wine =>
                <WineListRow key={wine.id} wine={wine}/>
            )}
            </tbody>
        </table>
    );
};

WineList.propTypes = {
    wines: PropTypes.array.isRequired
};

export default WineList;
