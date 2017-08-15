import React, { Component } from "react";
import { TimelineMax, TweenMax, Back } from "gsap"

export default class MainPage extends Component {
  
  title    = null
  subTitle = null
  arrows   = null
  text     = null

  componentDidMount() {
    this.title    = document.querySelector(".main-page .title");
    this.subTitle = document.querySelector(".main-page .sub-title");
    this.text     = document.querySelector(".main-page .start span");
    this.arrows   = document.querySelectorAll(".main-page .start div");
    
    const tl = new TimelineMax();
    
    tl.from(this.title, .4, {
      ease: Back.easeOut,
      opacity: 0,
      y: "-400px"
    });
    
    tl.from(this.subTitle, .4, {
      ease: Back.easeOut,
      opacity: 0,
      y: "-400px"
    });
    
    
    tl.from(this.arrows, .6, {
      rotation: "180",
    });
    
    tl.from(this.text, .6, {
      fontSize: "0px",
      alpha: "0",
      width: "0px"
    });
   
  }

  start = () => {
     
    const tl = new TimelineMax();
    
    tl.to(this.arrows, 1, {
      rotation: "180"
    });
    
    tl.to(this.text, 1, {
      fontSize: "0px",
      alpha: "0",
      width: "0px",
      onComplete: () => {
        this.props.start();
      }
    });
    
  }

  render() {

    return(
      <div class="main-page" style={{backgroundImage: "url(./imgs/indio-1.jpg)" }}>
      
        <div class="opac-bg" />
        
        <div class="content">
          <div class="title">
            <h1>Vamos testar seu conhecimento!</h1>
          </div>
          
          <div class="sub-title">
            <h4>
              você ira responder a uma série de questões sobre os tupi guaranis.
              não tenha medo de errar, pois o objetivo principal é memorizar ;) 
            </h4>
          </div>
          
          <div class="start" onClick={this.start}>
            <div>&lt;</div> 
            <span>começar</span> 
            <div>&gt;</div>
          </div>
          
        </div>
      </div>
    );
  }
}






