import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      result: ""
    };
  }

  onClick = button => {
    if (button === "=") {
      this.calculate()
    }

    else if (button === "C") {
      this.reset()
    }
    else if (button === "CE") {
      this.backspace()
    }

    else {
      this.setState({
        result: this.state.result + button
      })
    }
  };


  calculate = () => {
    var checkResult = ''
    if (this.state.result.includes('--')) {
      checkResult = this.state.result.replace('--', '+')
    }

    else {
      checkResult = this.state.result
    }

    try {
      this.setState({
        // eslint-disable-next-line
        result: (eval(checkResult) || "") + ""
      })
    } catch (e) {
      this.setState({
        result: "error"
      })

    }
  };

  reset = () => {
    this.setState({
      result: ""
    })
  };

  backspace = () => {
    this.setState({
      result: this.state.result.slice(0, -1)
    })
  };

  render() {
    let result = this.state.result;
    return (
      <div className="App">
        <div className="SA-Display"><p className="SA-Error">{result}</p></div>
        <button name="(" className="SA-Button" onClick={e => this.onClick(e.target.name)}>(</button>
        <button name="CE" className="SA-Button" onClick={e => this.onClick(e.target.name)}>CE</button>
        <button name=")" className="SA-Button" onClick={e => this.onClick(e.target.name)}>)</button>
        <button name="C" className="SA-Button" onClick={e => this.onClick(e.target.name)}>C</button><br></br>
        <button name="7" className="SA-Button" onClick={e => this.onClick(e.target.name)}>7</button>
        <button name="8" className="SA-Button" onClick={e => this.onClick(e.target.name)}>8</button>
        <button name="9" className="SA-Button" onClick={e => this.onClick(e.target.name)}>9</button>
        <button name="+" className="SA-Button" onClick={e => this.onClick(e.target.name)}>+</button><br></br>
        <button name="4" className="SA-Button" onClick={e => this.onClick(e.target.name)}>4</button>
        <button name="5" className="SA-Button" onClick={e => this.onClick(e.target.name)}>5</button>
        <button name="6" className="SA-Button" onClick={e => this.onClick(e.target.name)}>6</button>
        <button name="-" className="SA-Button" onClick={e => this.onClick(e.target.name)}>-</button><br></br>
        <button name="1" className="SA-Button" onClick={e => this.onClick(e.target.name)}>1</button>
        <button name="2" className="SA-Button" onClick={e => this.onClick(e.target.name)}>2</button>
        <button name="3" className="SA-Button" onClick={e => this.onClick(e.target.name)}>3</button>
        <button name="*" className="SA-Button" onClick={e => this.onClick(e.target.name)}>x</button><br></br>
        <button name="." className="SA-Button" onClick={e => this.onClick(e.target.name)}>.</button>
        <button name="0" className="SA-Button" onClick={e => this.onClick(e.target.name)}>0</button>
        <button name="=" className="SA-Button" onClick={e => this.onClick(e.target.name)}>=</button>
        <button name="/" className="SA-Button" onClick={e => this.onClick(e.target.name)}>÷</button>
      </div>
    );
  }
}
export default App;
