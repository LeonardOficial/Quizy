import React, { Component } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

class Options extends Component {

  componentShouldUpdate(nextProps) {
    return this.props.currentIndex != nextProps.currentIndex
  }

  render() {
    const options = [];
    
    if(this.props.data.answer) {
      for(var i=0, l=this.props.data.answer.length; i<l; i++) {
        const question = this.props.data.answer[i][0];
        options.push(<li key={i.toString()} class={ this.props.currentIndex == i ? "active" : "" } onClick={ this.props.setAnswer.bind(null, question, i) }>{ question }</li>);
      }
    }
    
    return(
      <ul class="options">
        { options }
      </ul>
    );
  }
}

export default class Question extends Component {

  shouldComponentUpdate(nextProps) {
    //alert(this.props.currentIndex);
    //alert(nextProps.currentIndex);
    return(
      this.props.isOpen != nextProps.isOpen ||
      this.props.currentIndex != nextProps.currentIndex
    );
  }
  
  close = () => {
    
  }

  render() {
    
    return(
      <Modal backdrop="static" isOpen={this.props.isOpen} toggle={this.close} class="full-post pl-alert" >
      
        <ModalHeader>
          { this.props.data.question }
        </ModalHeader>
        
        <ModalBody>
          <Options data={this.props.data} currentIndex={this.props.currentIndex} setAnswer={this.props.setAnswer} />
        </ModalBody>
        
        <ModalFooter>
          <Button onClick={this.props.reply} color="danger" toggle={this.close} >send</Button>
        </ModalFooter>
        
      </Modal>
    );
  }
}






