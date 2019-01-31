import React, { Component } from 'react';
import {connect} from 'react-redux';
import {fetchQuestion} from '../actions/questions';

// const randomData = (data) => {
//     if (!data) {
//         throw new Error('Uh Oh! Something went wrong')
//     }

//     const randomizer = Math.floor(Math.random() * Math.floor(data));

//     if (randomizer < data.length){
//         return randomizer
//     }
// }

class Next extends Component {

    handleButtonClick(results){
        console.log(this.props.userData.id);
        const currentUserId = this.props.userData.id;
        this.setState({
            // randomQuestion: randomData(results),
            userData: this.randomQuestion
        }); 
        return this.props.dispatch(fetchQuestion(currentUserId));
    }

    render() {
        return (
            <div className="next-button">
                <button onClick={() => this.handleButtonClick()}>Next Question</button>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        userData: state.auth.currentUser || [],
        
    }
}

export default connect(mapStateToProps)(Next);