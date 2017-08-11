import React from "react";
import { render } from "react-dom";

import MainPage from "./containers/MainPage"
import FinishPage from "./containers/FinishPage"
import TheGame from "./containers/TheGame"

import "./styles/styles.js";
import "./preload.js";

const app = document.getElementById("root");

class Main extends React.Component {

  state = { playing: false, finished: false }

  start = () => {
    this.setState({playing: true});
  }
  
  
  end = () => {
    this.setState({playing: false, finished: true});
  }
  
  render() {
  
    var Show = (!this.state.playing && !this.state.finished) ? <MainPage start={this.start} /> : <TheGame end={this.end} />;
    Show = this.state.finished ? <FinishPage /> : Show;

    return(
      <div>
        {
          Show
        }
      </div>
    );
  }
}

render(
  <Main />
, app);




