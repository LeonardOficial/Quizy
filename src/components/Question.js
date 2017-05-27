import React, { Component } from "react";

import { Button } from "reactstrap";

class Options extends Component {

  state: { current: -1 }

  componentShouldUpdate(nextProps, nextState) {
    return true; //his.state.current != nextState.current;
  }
  
  setAnswer(answer, i) {
    this.props.setAnswer(answer);
    this.setState({ current: i });
  }

  render() {
    var i = 0;
    const options = [];
    
    if(this.props.data.answers) {
      for(var questionStr in this.props.data.answers) {
        const question = this.props.data.answers[questionStr];
        options.push(<li key={i.toString()} class={ this.state.current == i ? "active" : "" } onClick={ this.setAnswer.bind(null, questionStr, i) }>{ questionStr }</li>);
        i++;
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
    return (
      this.props.data != nextPros.data
    );
  }

  render() {
 
    return(
      <div class="question-holder" >
        <Options data={this.props.data} setAnswer={this.props.setAnswer} />
      </div>
    );
  }
}





