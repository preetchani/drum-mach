import React from 'react';
import './App.css';
import firstFormat from './sounds/firstFormat';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state={
      power:true,
      display: String.fromCharCode(160),
      currentSoundFormat:firstFormat,
      currentSoundId:'Heart Kit',
      slidVal:0.3
    };
  }
  render(){
    return (
      <div className="control-container">
        <div className="constrol">
          <p>Power</p>
          <div className="select">
            <div className="inner"/>
          </div>
        </div>
        <p id="display"></p>
        <div className="volume-slider">
          <input max="1" min="0" step="0.1" type="range" value={this.state.slidVal} />
        </div>

        <div className="constrol">
          <p>Sound Format</p>
          <div className="select">
            <div className="inner"/>
          </div>
        </div>
      </div>
    );
  }
  
}

export default App;
