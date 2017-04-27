import React, { Component } from "react";
import { Progress } from "reactstrap";

import Modal from "../components/Modal";
import Score from "../components/Score";
import Floor from "../components/Floor";

//# Game board flows"
import Flow from "../flow.json";

const flow = Flow.v1;


class Board extends Component {

  shouldComponentUpdate(nextProps) {
    return this.props.current != nextProps.current;
  }

  render() {
  
    var qIndex  = 0;
    const board = [];
  
    for(var i=0, floor=null; floor=flow[i++];) {
      if(floor.empty) {
        board.push(<Floor key={i.toString()} layout={floor} />);
        continue;
      }
      
      const data = this.props.data.data[qIndex];
      board.push(<Floor key={i.toString()} qIndex={qIndex} act={this.props.seeQuestion} current={ this.props.current == qIndex } data={data} layout={floor} />);
      qIndex++;
    }
    
    const boardStyle = { backgroundImage: "url(./imgs/the-game-background.png)" };
  
    return(
      <div class="board" style={boardStyle} >
        <ul>
          { board }
        </ul>
      </div>
    );
  }
}

export default class TheGame extends Component {
  state = {
    //# floor
    current:  0,
    
    //# score
    profs:   {},
    
    //# modal
    modal:   {},
    isOpen:  false,
    currentIndex: -1,
    currentAnswer: null
  }
  
  constructor(props) {
    super(props);
    
    this.props.startLoading();
    
    const temp1 = {};
    const profs = this.props.data.profs;
    
    for(var i=0; i<profs.length; i++) {
      temp1[profs[i]] = { name: profs[i], val: 0 };
    }
    
    this.state.profs = { ...temp1 };
    
  }
  
  shouldComponentUpdate(nextProps, nextState) {
    return (
      this.state.current      != nextState.current ||
      this.state.isOpen       != nextState.isOpen  ||
      this.state.currentIndex != nextProps.currentIndex
    );
  }
  
  componentDidMount() {
  
    setTimeout(() => {
      this.props.endLoading();
    }, 500);
    
  }
  
  increase(name, val) {
    this.setState((prev) => {
      return {
        profs: {
          ...prev.profs,
          [name]: {
            name,
            val: prev.profs[name].val + val
          }
        }
      }
    });
  }
  
  seeQuestion = (data) => {
    this.setState({isOpen: true, modal: data});
  }
  
  close = () => {
    this.setState({isOpen: false});
  }
  
  nextFloor = () => {
    this.setState({
      current: ++this.state.current
    });
  }
  
  setAnswer = (answer, i) => {
    this.setState({
      currentIndex: i,
      currentAnswer: answer
    });
  }
  
  reply = () => {
    if(this.state.currentAnswer == null) return 0;
    
    const choice  = this.state.currentAnswer;
    const answers = this.props.data.data[this.state.current].answer;
    
    outer: for(var i=0, l=answers.length; i<l; i++) {
      if(choice == answers[i][0]) {
        for(var i2=1, l2=answers[i].length; i2<l2; i2++) {
        
          const name = answers[i][i2].name;
          const val  = answers[i][i2].val;
          
          //increase points
          this.setState((prev) => {
            return {
              profs: {
                ...prev.profs,
                [name]: {
                  name,
                  val: prev.profs[name].val + val
                }
              }
            }
          });
        }
        break outer;
      }
    }
    
    
    this.setState({
      //# close modal
      isOpen: false,
      currentAnswer: null, 
      currentIndex: -1,
      
      //# go to next floor
      current: ++this.state.current
    });
    
  }
  
  over = () => {
    alert("hha");
  }
  
  render() {
  
    return(
      <div class="the-game">
        
        <Modal isOpen={this.state.isOpen} setAnswer={this.setAnswer} reply={this.reply} data={this.state.modal} currentIndex={this.state.currentIndex} currentAnswer={this.state.currentAnswer} />
        
        <Score profs={this.state.profs} />
        
        <Board data={this.props.data} current={this.state.current} seeQuestion={this.seeQuestion} />
        
      </div>
    );
  }
}





