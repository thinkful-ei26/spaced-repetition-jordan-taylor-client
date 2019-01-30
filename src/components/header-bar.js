import React from 'react';
import {connect} from 'react-redux';
import {clearAuth} from '../actions/auth';
import {clearAuthToken} from '../local-storage';
import Header from './header'
import './header-bar.css'

export class HeaderBar extends React.Component {
    logOut() {
        this.props.dispatch(clearAuth());
        clearAuthToken();
    }

    render() {
        // Only render the log out button if we are logged in
        let currentUser;
        let logOutButton;

        if (this.props.loggedIn) {

            currentUser = (
                <li className="current-user">Logged in as <span className="user-span">{this.props.currentUser.username}</span></li>
            );
            logOutButton = (
                <button className ="log-out" onClick={() => this.logOut()}>Log out</button>
            );
        }
        return (
            <div className="header-bar">
                <Header />
                <ul className="header-bar-ul">
                    {currentUser}
                    {logOutButton}
                </ul>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    loggedIn: state.auth.currentUser !== null,
    currentUser: state.auth.currentUser
});

export default connect(mapStateToProps)(HeaderBar);
