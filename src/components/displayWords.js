import React from 'react'; 
import {connect} from 'react-redux'; 
import { fetchProtectedData } from '../actions/protected-data';

class DisplayWords extends React.Component {

    componentDidMount(){
        this.props.dispatch(fetchProtectedData());
    }

    search(e){
        e.preventDefault();
        const currentQuestion = this.currentQuestion.value
        if (!currentQuestion) {
            throw new Error('Uh Oh! Something went wrong')
        }
        if (currentQuestion.question.includes(currentQuestion.answer)){
            this.setState({
                correctCount: this.correctCount++,
                correct: true
            })
        } 
    
        else{
            this.setState({
                incorrectCount: this.incorrectCount++,
                correct: false
            })
        }
    }

    submit(answer){
        if (answer){
            
        }
    }

    render() {

       const questionToDisplay = (data) => {
           if(this.props.questions === null){
               return <div>Loading questions...</div>
           }
           else{ 
               return <div>{this.props.questions.text}</div>
            }
        };

        return (
            <section className="display-words" onSubmit={() => this.submit()}>
                {this.props.modalOpen ? 'The model will go here' : ''}
                <div>
                    <h1 className="current-question">
                    {questionToDisplay()}                  
                    </h1>
                    <input className ="input" type="search" ref={input => (this.input = input)} />
                    <button type="submit" className ="submit-button" onSubmit={() => this.submit()}>Check Answer</button>
                </div>
            </section>
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
        questions: currentUser.questions,
        // questions: state.protectedData.data,
        head: currentUser.head,
        modalOpen: state.protectedData.modalOpen
    };
};

export default connect(mapStateToProps)(DisplayWords);