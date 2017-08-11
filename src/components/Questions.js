import React, { Component } from "react";
import { TweenMax, Back } from "gsap"

export default class Questions extends Component {

  componentDidMount() {
    const els = document.querySelectorAll(".options li");
    TweenMax.staggerFrom(els, 1, {
      ease: Back.easeOut,
      opacity: 0,
      x: "-=100"
    }, .2);
  }
   
  setAnswer(opt, i) {
    const el = document.querySelectorAll(".options li")[i];
    this.props.setAnswer(opt, el);
  }
   
   
  render() {
  
    const Options = [];
    for(let i=0, l=this.props.options.length; i<l; i++) {
      Options.push(
        <li onClick={ this.setAnswer.bind(this, this.props.options[i], i) } >
         <span >{ i+1 }</span> { this.props.options[i] }
        </li>
      );
    }
    
    return(
      <div class="questions" style={{backgroundImage: "url("+this.props.img+")"}}>
        <div class="question">
          <p>{ this.props.question }</p>
        </div>
        <ul class="options">
          { Options }
        </ul>
      </div>
    );
    
  }
  
}












