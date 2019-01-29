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
            <h2>Welcome To Learn React!</h2>
            <h3>Here you will learn core web dev and react.js concepts through a technique known as 'Spaced-Repetition'.<br/>
            You will be shown key terms, and asked to answer with corresponding definitions. Yes, we will be keeping score!<br/>
            In order to test your memory further, the questions become more spaced out as you answer.</h3>
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
