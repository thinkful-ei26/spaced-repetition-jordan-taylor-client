import React, { Component } from 'react';
import Modal from 'react-modal';
import { connect } from 'react-redux';

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

  export default class AnswerModal extends Component {
      constructor(){
          super();
      
      this.state = {
          modalIsOpen: false,
          clicked: false,
          correct: false,
          wrong: false
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
                    onAfterOpen={this.afterOpenModal}
                    style={customStyles}
                    contentLabel="Gender Score Card"
                >
                    <button onClick={this.props.closeModal}>close</button>
                </Modal>
            </div>
        )
    }
}