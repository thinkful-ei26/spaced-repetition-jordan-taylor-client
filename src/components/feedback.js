import React, { Component } from 'react';
import { connect } from 'react-redux';

import AnswerModal from './answers-modal';

const score = (data) => {
    if (!data) {
        throw new Error('Uh Oh! Something went wrong')
    }

    const correctRounded = Math.round(correct * 100 / data.length);
    const incorrectRounded = Math.round(incorrect * 100 / data.length);
    const score = Math.round(correctRounded + incorrectRounded / 10) * 10;

    if (score === 100){
        return 'Current Score = 100%'
    }
    else if(score === 90){
        return 'Current Score = 90%'
    }
    else if(score === 80){
        return 'Current Score = 80%'
    }
    else if(score === 70){
        return 'Current Score = 70%'
    }
    else if(score === 60){
        return 'Current Score = 60%'
    }
    else if(score === 50){
        return 'Current Score = 50%'
    }
    else if(score === 40){
        return 'Current Score = 40%'
    }
    else if(score === 30){
        return 'Current Score = 30%'
    }
    else if(score === 20){
        return 'Current Score = 20%'
    }
    else if(score === 10){
        return 'Current Score = 10%'
    }
    else if(score === 0){
        return 'Current Score = 0%'
    }
}

class Feedback extends Component {

    closeModal() {
        
    }

    render(){
        return (
            <div>
                <AnswerModal 
                    modalOpen={this.state.modalOpen}
                    answer={this.state.currentAnswer}
                    score={this.state.currentScore}
                    closeModal={(e) => this.closeModal(e)}
                />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        currentQuestion:state.protectedData.data.current,
        userQuestions: state.protectedData.data,
    }
}

export default connect(mapStateToProps)(Feedback);