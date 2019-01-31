import React from 'react'; 
import {connect} from 'react-redux'; 
import { fetchProtectedData } from '../actions/protected-data';

class DisplayWords extends React.Component {
    constructor(){
        super();

        this.state = {
            checkAnswer: false, 
            newQuestion:false
        }
    }
    componentDidMount(){
        this.props.dispatch(fetchProtectedData());
    }

    render() {

       const questionToDisplay = (data) => {
           if(this.props.currentQuestion === null){
               return <div>Loading questions...</div>
           }
           else{ 
               return <div>{this.props.currentQuestion.question}</div>
            }
        };

        return (
            <div>
                <h1 className="current-question">
                {questionToDisplay()}                  
                </h1>
                <input className ="input" type="search" ref={input => (this.input = input)} />
                <button type="submit" className ="submit-button">Check Answer</button>
            </div>
        )
    }
}

const mapStateToProps = state => {
    const {currentUser} = state.auth;
    console.log('state:', state); 
    console.log(state.question.next);
    return {
        username: state.auth.currentUser.username,
        name: `${currentUser.firstName} ${currentUser.lastName}`,
        questions:currentUser.questions,
        userQuestions: state.protectedData.data,
        currentQuestion:state.protectedData.data.current, 
        nextQuestion:state.question.next
    };
};

export default connect(mapStateToProps)(DisplayWords);