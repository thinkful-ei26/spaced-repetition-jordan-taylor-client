import React from 'react';
import {connect} from 'react-redux';
import requiresLogin from './requires-login';
import {fetchProtectedData} from '../actions/protected-data';
import AnswerInput from './answerInput';

import AnswerFeedback from './answerFeedback';
import DisplayWords from './displayWords';

import './dashboard.css';

export class Dashboard extends React.Component {
    componentDidMount() {
        this.props.dispatch(fetchProtectedData());
    }

    render() {
        const userScore = () => {

            let attemptsForWord = 0;
            let correctAnswers = 0;
            let score = 1;

            if(this.props.newScore.response !== {} && this.props.newScore.response.numberOfCorrectAnswersForWord !== undefined) {
                correctAnswers = this.props.newScore.response.numberOfCorrectAnswersForWord;
                attemptsForWord = this.props.newScore.response.wordsAttempts;
                score = Math.fround((correctAnswers/attemptsForWord) * 100).toFixed(2);

                return <span>{score}%</span>
            }
            if(this.props.protectedData !== null && this.props.protectedData !== undefined) {

                correctAnswers = this.props.protectedData.numberOfCorrectAnswersForWord; 
                attemptsForWord = this.props.protectedData.wordsAttempts
                
                if(attemptsForWord !== 0 && attemptsForWord !== undefined ) {
                    score = Math.fround((correctAnswers/attemptsForWord) * 100).toFixed(2);

                    return <span>{score}%</span>
                } 
                else { return <span>You haven't attempted the current word</span>}
            }
        }
        return (
            <div className="dashboard">
                <div className="dashboard-name">Hello {this.props.name.toUpperCase()}</div>
                <div className="dashboard-current-score">
                <b>Your score for the current word is:</b>{userScore()} 
                </div>    
                <AnswerFeedback />           
                <DisplayWords />
                <AnswerInput />

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
        protectedData: state.protectedData.data,
        question: state.question,
        id: state.auth.currentUser.id,
        newScore:state.serverResponse
    };
};

export default requiresLogin()(connect(mapStateToProps)(Dashboard));
