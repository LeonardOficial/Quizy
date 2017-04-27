import React, { Component } from "react";

export default class Floor extends Component {

  state = { shown: false }

  shouldComponentUpdate(nextProps) {
    return !!this.props.current;
  }
  

  render() {
  
    const { data, layout, act, current } = this.props;

    const style = {
      float:                   layout.right   ? "right" : "left",
      borderBottomRightRadius: layout.curveBR ? "50px"  : "0px" ,
      borderBottomLeftRadius:  layout.curveBL ? "50px"  : "0px" ,
      borderTopRightRadius:    layout.curveTR ? "50px"  : "0px" ,
      borderTopLeftRadius:     layout.curveTL ? "50px"  : "0px"
    }
  
    if(layout.empty) {
  
      style.opacity = 0;
      /*style.backgroundColor = "transparent";
      style.boxShadow = "none";
      style.border = "1px solid black";*/
    
      return(
        <li style={style} ></li>
      );
    }
  
    if(!current) {
      style.opacity = 0.8;
      style.border  = "1px solid #000";
    
      return(
        <li style={style} ></li>
      );
    }
    
    return(
      <li class={ current ? "active" : "" } onClick={ act.bind(null, data) } style={style} >
        <img src="./imgs/question-icon.png" />
      </li>
    );
    
  }
}





