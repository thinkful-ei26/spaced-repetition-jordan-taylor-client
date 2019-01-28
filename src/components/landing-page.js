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
            <h2>Welcome To The Web Development and React Learning App</h2>
            <h3>Here you will learn web-development and React concepts through a technique known as 'Spaced-Repetition'.</h3>
            <h3>You will be shown definitions of key terms, and asked to explain the key terms again at a later time.</h3>
            <h3>In order to test your memory, the questions will become more and more spaced out as time goes on.</h3>
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
