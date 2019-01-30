import React from 'react'; 
import {connect} from 'react-redux'; 

class DisplayWords extends React.Component {

    render() {
        const questionCard = () => {
            console.log(this.props);
            if(this.props.questions.length !== 0){
              const resultArray =  this.props.questions.map(object => {
                    console.log('object we are mapping over:', object.question);
                    return <div>{object.question}</div>
                }
                );
                return resultArray;
            }
            else {
                return (<div>pulling in the knowledge you seek...</div>)
            }
        }
        console.log(this.props);
        return (
            <div>
                {questionCard()}
            </div>
        )
    }
}

const mapStateToProps = state => {
    const {currentUser} = state.auth;
    return {
        username: state.auth.currentUser.username,
        name: `${currentUser.firstName} ${currentUser.lastName}`,
        questions:currentUser.questions,
        protectedData: state.protectedData.data, 
    };
};

export default connect(mapStateToProps)(DisplayWords);