import React, { Component } from "react";
import { TweenMax } from "gsap"

export default class Pagination extends Component {

  componentDidMount() {
    const els = document.querySelectorAll(".pagination li");
    TweenMax.staggerFrom(els, 1, {
      opacity: 0,
      y: "+=100"
    }, .2);
  }

  
  shouldComponentUpdate(nextProps) {
    if(this.props.current != nextProps.current) {
      return true;
    }
    return false;
  }

  
  render() {
    
    return(
      <ul class="pagination">
        <li class={ this.props.current == 0 ? "active" : "" }>1</li>
        <li class={ this.props.current == 1 ? "active" : "" }>2</li>
        <li class={ this.props.current == 2 ? "active" : "" }>3</li>
        <li class={ this.props.current == 3 ? "active" : "" }>4</li>
      </ul>
    );
    
  }
  
}





