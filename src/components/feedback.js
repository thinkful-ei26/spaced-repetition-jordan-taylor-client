import React, { Component } from 'react';
import { connect } from 'react-redux';

import AnswerModal from './answers-modal';

let correct = 0;
let incorrect = 0;

const answers = (currentQuestion) => {
    if (!currentQuestion) {
        throw new Error('Uh Oh! Something went wrong')
    }

    // const answerOne = data[0].answer
    // const answerOneResponse = "most recent version" && "ECMAScript"
    // const answerTwo = data[1].answer
    // const answerTwoResponse = "syntax extension" && "javascript" && "camel case"
    // const answerThree = data[2].answer
    // const answerThreeResponse = "building blocks" && "immutable" 

    if (currentQuestion.question.includes(currentQuestion.answer)){
        correct++
        return true
    } 

    else{
        incorrect++
        return false
    }
}

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
    constructor(props) {
        super(props);
        this.state = {
            userQuestions: [],
            isLoaded: false,
            currentAnswer: '',
            currentScore: '%',
            modalOpen: false,
        }
    }

    closeModal() {
        this.setState({
            modalOpen: false
        });
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