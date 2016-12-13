// This component handles the App template used on every page.
import React, {PropTypes} from 'react';
import Header from './common/Header';

// React Router will pass child comp as prop onto app comp, then composed here
class App extends React.Component {
    render() {
        return (
            <div className="container-fluid">
                <Header/>
                {this.props.children}
            </div>
        );
    }
}

// Making requirement of propType - children, which it does meet in render above
App.propTypes = {
    children: PropTypes.object.isRequired
};

export default App;
