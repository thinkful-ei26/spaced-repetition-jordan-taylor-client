import React from 'react';
import {connect} from 'react-redux';
import {Link, Redirect} from 'react-router-dom';

import LoginForm from './login-form';
import './landing-page.css';

export function LandingPage(props) {
    // If we are logged in redirect straight to the user's dashboard
    if (props.loggedIn) {
        return <Redirect to="/dashboard" />;
    }

    return (
        <div className="landing-page">
            <h2 className="landing-h2">Welcome To Alternis Vicibus</h2>
            <h4 className="landing-h4-sub">A smarter way to learn Medical Terminology</h4>
            <h4 className="landing-h4-main">
            Using space-repetitioned flash cards, you will be shown key medical terms, and asked to submit it's english counter-part.<br/> Yes, we will be keeping score!</h4>
            <LoginForm />
            <label className="landing-register">Don't have an account yet?</label>
            <Link to="/register" style={{color: 'white'}}>Sign Up!</Link>
        </div>
    );
}

const mapStateToProps = state => ({
    loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(LandingPage);
