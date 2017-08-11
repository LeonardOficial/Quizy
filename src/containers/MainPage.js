import React, { Component } from "react";

export default class MainPage extends Component {

  render() {

    return(
      <div class="main-page" style={{backgroundImage: "url(./imgs/indio-1.jpg)" }}>
      
        <div class="opac-bg" />
      
        <h1>Vamos testar seu conhecimento!</h1>
        <h4>
          você ira responder a uma série de questões sobre os tupi guaranis.
          
          não tenha medo de errar, pois o objetivo principal é memorizar ;) 
        </h4>
        <h3 onClick={this.props.start}>
          <div>&gt;</div> clique para começar <div>&lt;</div>
        </h3>
      </div>
    );
  }
}






