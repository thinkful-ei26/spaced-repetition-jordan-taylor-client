import React, { Component } from 'react';
import Modal from 'react-modal';
import { connect } from 'react-redux';

import DisplayWords from './displayWords';

const customStyles = {
    content : {
      top                   : '50%',
      left                  : '50%',
      right                 : 'auto',
      bottom                : 'auto',
      marginRight           : '-50%',
      transform             : 'translate(-50%, -50%)'
    },
  };

  Modal.setAppElement()

  class AnswerModal extends Component {
      constructor(){
          super();
      
      this.state = {
          modalIsOpen: false,
      };

      this.openModal = this.openModal.bind(this);
      this.afterOpenModal = this.afterOpenModal.bind(this);
    }

    openModal() {
        this.setState({
            modalIsOpen: true
        });
    }

    afterOpenModal(){
        this.subtitle.style.color = '#f442c2';
    }

    render(){
        return (
            <div>
                <Modal
                    isOpen={this.props.modalOpen}
                    display={(e) => this.displayWords(e)}
                    onAfterOpen={this.afterOpenModal}
                    style={customStyles}
                    contentLabel="User Score Card"
                >
                    <h2 ref={subtitle => this.subtitle = subtitle}>{this.props.score}</h2>
                    <button onClick={this.props.closeModal}>close</button>
                </Modal>
                <DisplayWords
                    isOpen={this.props.modalOpen}
                    display={(e) => this.displayWords(e)}
                    style={customStyles}
                    contentLabel="User Score Card"
                />
            </div>
        )
    }
};

const mapStateToProps = (state) => {
    return {
        username: state.auth.currentUser.username,
        userQuestions: state.protectedData.data,
        currentQuestion:state.protectedData.data.current,
    }
};

export default connect(mapStateToProps)(AnswerModal);