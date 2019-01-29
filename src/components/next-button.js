import React, { Component } from 'react';
import {connect} from 'react-redux';


const randomData = (data) => {
    if (!data) {
        throw new Error('Uh Oh! Something went wrong')
    }

    const randomizer = Math.floor(Math.random() * Math.floor(data));

    if (randomizer < data.length){
        return randomizer
    }
}

class Next extends Component {
    constructor(props) {
        super(props);
        this.state = {
            randomQuestion: '',
            userData: []
        }
    }

    handleButtonClick(results){
        this.setState({
            randomQuestion: randomData(results),
            userData: this.randomQuestion
        })
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
        userData: state.protectedData.userData || [],
    }
}

export default connect(mapStateToProps)(Next);