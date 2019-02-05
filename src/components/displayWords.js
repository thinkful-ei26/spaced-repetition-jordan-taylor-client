import React from 'react'; 
import {connect} from 'react-redux'; 
import { fetchProtectedData } from '../actions/protected-data';

import './displaywords.css'

class DisplayWords extends React.Component {

    // componentDidMount(){
    //     this.props.dispatch(fetchProtectedData());
    // }
    // componentWillUpdate() {
    //     this.props.dispatch(fetchProtectedData());
    // }
    // componentWillUnmount(){
    //     this.props.dispatch(fetchProtectedData()); 
    // }

    render() {

       const questionToDisplay = (data) => {
           if(this.props.currentQuestion === null){
               return <div>Loading questions...</div>
           }
           if(this.props.nextQuestion.length !== 0){
               return <div>{ this.props.nextQuestion }</div>
           }
           else{ 
               return <div>{this.props.currentQuestion.currentWord}</div>
            }
        };

        return (
            <section className="display-words" >     
                <div>
                    <h1 className="current-question">
                    {questionToDisplay()}                  
                    </h1> 
                </div>
            </section>
        )
    }
} 

const mapStateToProps = state => {
    const {currentUser} = state.auth;
    console.log('state:', state); 
    console.log('next question:', state.question.nextQuestion);
    console.log('protected data:', state.protectedData.data);
    return {
        username: state.auth.currentUser.username,
        name: `${currentUser.firstName} ${currentUser.lastName}`,
        currentQuestion: state.protectedData.data,
        nextQuestion:state.question.nextQuestion,
        

    };
};
//
export default connect(mapStateToProps)(DisplayWords);