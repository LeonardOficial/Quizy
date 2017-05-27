import React, { Component } from "react";
import { Progress } from "reactstrap";

import Score from "../components/Score";
import Question from "../components/Question";


export default class TheGame extends Component {
  state = {
    //# floor
    current:  0,
    
    //# score
    profs:   {},
    
    //# question
    questionData: {},
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
    
    this.state.profs = {
      ...temp1 
    };
    
    this.state.questionData = this.props.data.data[0];
    
  }
  
  shouldComponentUpdate(nextProps, nextState) {
    return (this.state.current != nextState.current);
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
  
  close = () => {
    this.setState({isOpen: false});
  }
  
  nextFloor = () => {
    this.setState({
      current: ++this.state.current
    });
  }
  
  setAnswer = (answer) => {
    this.setState({
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
        
        <Score profs={this.state.profs} />
        
        <Question data={this.state.questionData} setAnswer={this.setAnswer} />
        
      </div>
    );
  }
}





