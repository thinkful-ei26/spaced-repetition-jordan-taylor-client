import React, { Component } from 'react'; 
import { connect } from 'react-redux';
import { feedback } from '../actions/feedback';
import { fetchProtectedData } from '../actions/protected-data'; 

class AnswerFeedback extends Component {

    componentWillMount(){
        this.props.dispatch(feedback());
    }

    render() {
        
        const masteredWords = () => {
            this.props.dispatch(fetchProtectedData());
            if(this.props.initialMasteredWordsArray === null ) {
                return (<li>Loading mastered words...</li>)
            }
            if(this.props.initialMasteredWordsArray.length === 0) {
                return <li>You have not mastered any words yet</li> 
            }
            else if(this.props.initialMasteredWordsArray > 0 && this.props.initialMasteredWordsArray.length > this.props.masteredWordsArray ){
                const returnedWords = this.props.initialMasteredWordsArray.map(word => {
                     
                    return <span key={word}><b>{word}, </b></span>
                })
                return returnedWords
            }
            else { 
                const newMasteredWords = this.props.masteredWordsArray.map(word => {
                    return <span key={word}><b>{word}, </b></span>
                });
                return newMasteredWords
            }
        }

        const feedbackForAnswer = () => {


            const displayWord = () => {
                
                if(this.props.previousQuestion !== undefined) {
                    return this.props.previousQuestion.text
                }
            }
            if(this.props.answeredCorrectly === true) {  
                              
                return (
                <div>
                    <div> Nice job! Your answer for {displayWord()} was correct!</div>
                    <div> Correct answer: {this.props.correctAnswer}</div>
                </div>
                );
            } if(this.props.answeredCorrectly === false && this.props.correctAnswer === "incorrect") { 
                return (
                <div>
                    <div> Your answer for {displayWord()} was incorrect. Try Again</div>                   
                </div>
                )
            }
            return '';
        }
        

        return (
            <div>
                <main className="masteredWords">
                    <label><b>Mastered Words</b></label>
                    <section>
                        {masteredWords()}
                        <hr></hr>
                        {feedbackForAnswer()}
                    </section>
                </main>
                
            </div>
        )
    }

}

const mapStateToProps = (state) => {

    return {
        answeredCorrectly:state.serverResponse.response.answeredCorrectly, 
        correctAnswer:state.serverResponse.response.correctAnswer || '', 
        masteredWordsArray:state.serverResponse.response.allMasteredWords || [], 
        initialMasteredWordsArray: state.auth.currentUser.masteredWords || [], 
        previousQuestion:state.serverResponse.response.currentWord || ''
    }
}
//
export default connect(mapStateToProps)(AnswerFeedback);