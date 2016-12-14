import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as wineActions from '../../actions/wineActions';
import WineList from './WineList';

class WinesPage extends React.Component {
    constructor(props, context) {
        super(props, context);

    }

    wineRow(wine, index) {
        return <div key={index}>{wine.title}</div>;
    }

    render() {
        const {wines} = this.props;

        return (
            <div>
                <h1>Wines</h1>
                <p>All about my time with wine</p>
                <div id="space"></div>
                <WineList wines={wines}/>
            </div>
        );
    }
}

WinesPage.propTypes = {
    wines: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
    return {
        wines: state.wines
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(wineActions, dispatch)
    };
}

// Export component decorated by React-Redux Connect function to interact with Redux
export default connect(mapStateToProps, mapDispatchToProps)(WinesPage);