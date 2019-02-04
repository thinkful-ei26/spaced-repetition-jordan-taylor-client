import React, { Component } from 'react';
// import { connect } from 'react-redux';
import {required, nonEmpty} from '../validators';
import {Field, reduxForm, focus} from 'redux-form';
import { feedback } from '../actions/feedback';


export class AnswerInput extends Component {
    
    onSubmit(values) {
        console.log(values);
        return this.props.dispatch(feedback(values.userAnswer));
    }

    render(){
        let error;
        if (this.props.error) {
            error = (
                <div className="form-error" aria-live="polite">
                    {this.props.error}
                </div>
            );
        }
        return (
            <form 
            className="userAnswerForm"
            onSubmit= {this.props.handleSubmit(values=> 
                {
                this.onSubmit(values);
                this.props.reset('answerInput');
                }
            )}>
                {error}
                <label htmlFor="answer">Enter Your Answer Here:</label>
                <Field
                    component="input"
                    type="text"
                    name="userAnswer"
                    id="userAnswer"
                    validate={[required, nonEmpty]}
                />
                <button disabled={this.props.pristine || this.props.submitting}>
                    Check Your Answer
                </button>
                </form>
        )
    }
}

export default reduxForm({
    form: 'answerInput',
    onSubmitFail: (errors, dispatch) => dispatch(focus('userAnswer'))
})(AnswerInput);