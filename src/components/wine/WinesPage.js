import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as wineActions from '../../actions/wineActions';

class WinesPage extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            wine: {title: "" }
        };

        // bind.(this): binds to WinesPage component
        this.onTitleChange = this.onTitleChange.bind(this);
        this.onClickSave = this.onClickSave.bind(this);
    }

    onTitleChange(event) {
        const wine = this.state.wine;
        // pull value out of event off of the target
        wine.title = event.target.value;
        // update state
        this.setState({wine: wine});
    }

    onClickSave() {
        this.props.actions.createWine(this.state.wine);
    }

    wineRow(wine, index) {
        return <div key={index}>{wine.title}</div>;
    }

    render() {
        return (
            <div>
                <h1>Wines</h1>
                <p>All about my time with wine</p>
                <h2>Add Wine</h2>
                <input
                    type="text"
                    onChange={this.onTitleChange}
                    value={this.state.wine.title} />

                <input
                    type="submit"
                    value="Save"
                    onClick={this.onClickSave} />
                <div id="space"></div>

                {this.props.wines.map(this.wineRow)}
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