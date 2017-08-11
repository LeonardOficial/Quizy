import React, { Component } from "react";

import Questions from "../components/Questions"
import Pagination from "../components/Pagination"

import data from "../data.json"

export default class TheGame extends Component {

  state = { currentQuestion: 0 }
  
  setAnswer = (val, el) => {
    const isCorrect = (val == data[this.state.currentQuestion].answer);
    const self = this;
    
    if(!isCorrect) {
      TweenMax.to(el, 1, {
        backgroundColor: "red"
      });
    } else {
      TweenMax.to(el, 1, {
        backgroundColor: "lime",
        scale: 1.1,
        onComplete: function() {
          
          if(self.state.currentQuestion == 3) {
            self.props.end();
          }
  
          self.setState((prevState) => {
            return { currentQuestion: ++prevState.currentQuestion };
          });
          
          TweenMax.staggerTo(".options li", .2, {
            backgroundColor: "white",
            scale: 1
          });
          
        }
      });
      
    }
    
  }

  render() {
  
    const currentData = data[this.state.currentQuestion];

    return(
      <div class="game-page">
      
        <div class="opac-bg" />
        
        <Questions question={currentData.question} options={currentData.options} img={currentData.img} setAnswer={this.setAnswer} />
      
        <Pagination current={this.state.currentQuestion} />
        
      </div>
    );
  }
}



