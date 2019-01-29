import React, { Component } from 'react';
import { connect } from 'react-redux';

class UserProgress extends Component {
    constructor(props) {
        super(props);
        this.state = {
            correct: [],
            incorrect: [],
            userScore: ''
        }
    }

    render() {
        return (
            this.props.userScore
        )
    }
}

const mapStateToProps = (state) => {
    return {
        userScore: state.protectedData.userScore || [],
    }
}

export default connect(mapStateToProps)(UserProgress);