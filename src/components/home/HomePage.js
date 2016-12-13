import React from 'react';
import {Link} from 'react-router';

class HomePage extends React.Component {
    render() {
        return (
            <div className="jumbotron">
                <h1>React.js</h1>
                <p>React, React Components, React Router in ES6 for my wine mind.</p>
                <Link to="wines" className="btn btn-primary btn-lg">Wines</Link>
            </div>
        );
    }
}

// When someone else imports this file, they will say import HomePage from HomePage
// and they will get a reference to the HomePage class.
export default HomePage;
