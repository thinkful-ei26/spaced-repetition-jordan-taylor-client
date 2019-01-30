import React from 'react';
import {connect} from 'react-redux';
import requiresLogin from './requires-login';
import {fetchProtectedData} from '../actions/protected-data';
import Feedback from './feedback';
import Next from './next-button';
import UserProgress from './user-progress';
import DisplayWords from './displayWords';

export class Dashboard extends React.Component {
    componentDidMount() {
        this.props.dispatch(fetchProtectedData());
    }

    render() {
        return (
            <div className="dashboard">
                <div className="dashboard-name">Hello {this.props.name.toUpperCase()}</div>
                <div className="dashboard-current-score">
                Your current score is: <UserProgress />
                </div>
                <Feedback />
                <DisplayWords />
                <Next />
            </div>
        );
    }
}
//
const mapStateToProps = state => {
    const {currentUser} = state.auth;
    return {
        username: state.auth.currentUser.username,
        name: `${currentUser.firstName} ${currentUser.lastName}`,
        protectedData: state.protectedData.protectedData,
        question: state.question,
        id: state.auth.currentUser.id,
    };
};

export default requiresLogin()(connect(mapStateToProps)(Dashboard));
