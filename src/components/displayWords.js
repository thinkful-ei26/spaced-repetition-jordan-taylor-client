import React from 'react'; 
import {connect} from 'react-redux'; 
import { fetchProtectedData } from '../actions/protected-data';

class DisplayWords extends React.Component {
    componentDidMount(){
        this.props.dispatch(fetchProtectedData());
        // this.props.dispatch(fetchQuestion());
    }


    render() {

        const questionCard = () => {
            console.log(this.props);
            if(this.props.protectedData.length !== 0){
              let resultArray =  this.props.protectedData.questions.map(object => {
                    return <div>{object.question}</div>
                });
              let currentResult = resultArray[0]
                return currentResult;
            }
            else {
                return (<div>pulling in the knowledge you seek...</div>)
            }
        }

        return (
            <div>
                <h1 className="current-question">                  {questionCard()}
                </h1>
                <input className ="input" type="search" ref={input => (this.input = input)} />
                <button type="submit" className ="submit-button">Check Answer</button>
            </div>

        )
    }
}

const mapStateToProps = state => {
    const {currentUser} = state.auth;
    return {
        username: state.auth.currentUser.username,
        name: `${currentUser.firstName} ${currentUser.lastName}`,
        protectedData: state.protectedData.data, 
        currentQuestion: state.protectedData.data.value,
    };
};

export default connect(mapStateToProps)(DisplayWords);