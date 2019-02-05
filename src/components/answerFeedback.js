import React, { Component } from 'react'; 
import { connect } from 'react-redux';
import { feedback } from '../actions/feedback';


class AnswerFeedback extends Component {

    // componentDidMount(){
    //     this.props.dispatch(feedback());
    // }
    

    render(){
        const masteredWords = () => {
            console.log(this.props.masteredWordsArray);
            console.log(this.props.initialMasteredWordsArray);
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
        

        return (
            <div>
                <main className="masteredWords">
                    <label>Mastered Words</label>
                    <section>
                        {masteredWords()}
                    </section>
                </main>
                
            </div>
        )
    }

}

const mapStateToProps = (state) => {

    return {
        answeredCorrectly:state.serverResponse.response.answeredCorrectly || '', 
        correctAnswer:state.serverResponse.response.correctAnswer || '', 
        masteredWordsArray:state.serverResponse.response.allMasteredWords || [], 
        initialMasteredWordsArray: state.auth.currentUser.masteredWords || []
    }
}

export default connect(mapStateToProps)(AnswerFeedback);