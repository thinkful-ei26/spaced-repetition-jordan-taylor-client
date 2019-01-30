import React from 'react'; 
import {connect} from 'react-redux'; 
import { fetchProtectedData } from '../actions/protected-data';

class DisplayWords extends React.Component {
    constructor(){
        super();

        this.state = {
            submit: false
        }
    }
    componentDidMount(){
        this.props.dispatch(fetchProtectedData());
    }

    render() {

<<<<<<< HEAD
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
=======
        // const questionCard = () => {
        //     console.log(this.props);
        //     if(this.props.protectedData.length !== 0){
        //       let resultArray =  this.props.protectedData.questions.map(object => {
        //             return <div>{object.question}</div>
        //         });
        //       return resultArray
        //     }
        //     else {
        //         return (<div>pulling in the knowledge you seek...</div>)
        //     }
        // }

        const questionToDisplay = () => {
            if(this.props.protectedData){
                return (
                    <div>
                        {this.props.protectedData.data}
                    </div> 
                )
            }
            if(this.props.protectedData.data) {
                return (
                    <div>
                        {this.props.protectedData.data.current}
                    </div> 
                )        
            }
            return (
                <div>
            {this.props.protectedData.data.current.value.question}
                </div>
            )
        }

        return (
            <div>
                <h1 className="current-question">                  {questionToDisplay()}
>>>>>>> 6f1b100de2ff5b21434b83d6b8334a6b99dcf49d
                </h1>
                <input className ="input" type="search" ref={input => (this.input = input)} />
                <button type="submit" className ="submit-button">Check Answer</button>
            </div>
        )
    }
}

const mapStateToProps = state => {
    const {currentUser} = state.auth;
    console.log('state:', state)
    return {
        username: state.auth.currentUser.username,
        name: `${currentUser.firstName} ${currentUser.lastName}`,
<<<<<<< HEAD
        questions:currentUser.questions,
        userQuestions: state.protectedData.data,
        currentQuestion:state.protectedData.data.current
=======
        protectedData: state.protectedData.data, 
        // current: state.protectedData.data.current.value,
        // next: state.protectedData.data.current.value,
>>>>>>> 6f1b100de2ff5b21434b83d6b8334a6b99dcf49d
    };
};

export default connect(mapStateToProps)(DisplayWords);