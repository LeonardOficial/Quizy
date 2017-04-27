import React, { Component } from "react";

class StartBtn extends Component {
  
  state = { pos: "10px" }
  
  setPos = (pos) => {
    this.setState({ pos });
  }
  
  shouldComponentUpdate(nextProps, nextState) {
    return this.state.pos != nextState.pos;
  }
  
  render() {
  
    const style = { marginTop: this.state.pos };
  
    return(
      <div class="start-holder"> 
        <div class="opa" />
        <div class="start-btn">
          <div style={style} class="tagger" />
          <span onClick={this.props.start} onMouseUp={ this.setPos.bind(null, "10px") } ><span class="fa fa-ms fa-gamepad" /> start</span>
          <span onMouseUp={ this.setPos.bind(null, "88px") } ><span class="fa fa-lightbulb-o" /> help us</span>
          <span onMouseUp={ this.setPos.bind(null, "166px") } ><span class="fa fa-cog" /> settings</span>
        </div> 
      </div>
    );
  }
}

export default class MainPage extends Component {

  componentShouldUpdate() {
    return false;
  }

  render() {

    const logoStyle = {
      borderRadius: "2px",
      float: "left",
      fontWeight: "bold",
      height: "62px",
      lineHeight: "40px",
      marginLeft: "-10px",
      opacity: "1",
      paddingLeft: "20px",
      paddingRight: "14px",
      width: "140px"
    }
  
    const subStyle = {
      display: "inline-block",
      fontSize: "8px",
      lineHeight: "10px",
      position: "absolute",
      marginLeft: "-96px",
      marginTop: "42px"
    }
  
    const mainPageStyle = { 
      backgroundImage: "url(./imgs/main-bg.jpg)" 
    };

    return(
      <div style={mainPageStyle} class="main-page">
    
        <div class="util-list">
          <ul>
            <li style={logoStyle} >
              Qu¡zy
              <span style={subStyle} >another way of asking questions</span>
            </li>
            <li><span class="fa fa-question"/>  </li>
          </ul>
        </div>
      
        <StartBtn start={this.props.start} />
      
        <div class="util-list">
          <ul>
            <li><span class="fa fa-facebook-official"/> </li>
            <li><span class="fa fa-github"/> </li>
            <li><span class="fa fa-user"/>  </li>
          </ul>
        </div>
      
      </div>
    );
  }
}






