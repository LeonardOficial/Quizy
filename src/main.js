import React from "react";
import { render } from "react-dom";

//import MainPage from "./container/MainPage";
import TheGame from "./container/TheGame";

//# Game data
import data from "./data.json";

import "./styles/styles.js";

const app = document.getElementById("root");

class Main extends React.Component {

  state = { playing: false, loading: true }
  /*
  shouldComponentUpdate(nextProps, nextState) {
    return this.state.playing != nextState.playing;
  }*/
  
  componentDidMount() {
  
    setTimeout(() => {
      this.endLoading();
    }, 500);
  }

  start = () => {
    this.setState({playing: true});
  }
  
  startLoading = () => {
    this.setState({loading: true});
  }
  
  endLoading = () => {
    this.setState({loading: false});
  }
  
  render() {

    return(
      <div>
        <div style={{ display: this.state.loading ? "block" : "none" }} id="black-wall">
          <span class="fa fa-spin fa-spinner" />
          <div id="wall" />
        </div>
        
        <TheGame startLoading={this.startLoading} endLoading={this.endLoading} data={data} />
        
      </div>
    );
  }
}

render(
  <Main />
, app);




