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
        // this.props.dispatch(fetchQuestion());
    }

    // submit(input)
    //     if (input){
    //         this.setState({
    //             submit: true,
    //         })
    //     }


    render() {

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
        protectedData: state.protectedData.data, 
        // current: state.protectedData.data.current.value,
        // next: state.protectedData.data.current.value,
    };
};

export default connect(mapStateToProps)(DisplayWords);