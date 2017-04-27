import React, { Component } from "react";
import { Progress } from "reactstrap";

export default class Score extends Component {

  shouldComponentUpdate(nextProps) {
    return this.props.profs !== nextProps.profs;
  }

  render() {
    const arr = [];
    
    for(var name in this.props.profs) {
      const prof = this.props.profs[name];
    
      arr.push(
        <li>
          { name }
          <Progress striped animated color="danger" value={ prof.val }>{ prof.val }%</Progress>
        </li>
      );
    }
  
    return(
      <div class="score">
        <ul>
          { arr }
        </ul>
      </div>
    );
  }
}




