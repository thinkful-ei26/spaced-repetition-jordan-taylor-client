import React from 'react';
import {connect} from 'react-redux';
import {Link, Redirect} from 'react-router-dom';

import LoginForm from './login-form';

export function LandingPage(props) {
    // If we are logged in redirect straight to the user's dashboard
    if (props.loggedIn) {
        return <Redirect to="/dashboard" />;
    }

    return (
        <div className="home">
            <h2>Welcome To Alternis Vicibus</h2>
            <h3>Learn common medical terminology more efficiently using our app.<br/>
            You will be shown key medical terms, and asked to submit it's english counter-part.<br/> Yes, we will be keeping score!<br/><br/>
            Questions become more spaced out based on your answers.</h3>
            <LoginForm />
            <label>Don't Have An Account? Create One </label>
            <Link to="/register">Here</Link>
        </div>
    );
}

const mapStateToProps = state => ({
    loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(LandingPage);
