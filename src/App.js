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
      sliderVal:0.3
    };
  }

  powerControl=()=>{
    this.setState({
      power:!this.state.power,
      display: String.fromCharCode(160)
    });
  }

  //Adjust Drum volume
  adjustVolume = (e)=>{
    //check if power button is on or not
    if(this.state.power){
      this.setState({
        sliderVal:e.target.value,
        display: 'Volume: ' + Math.round(e.target.value * 100)
      });
      setTimeout(() => this.clearDisplay(), 1000);
    }
  }
  //function to clrear volume area
  clearDisplay=()=>{
    this.setState({
      display: String.fromCharCode(160)
    });
  }
  render(){
    const powerSlider = this.state.power ? {float: 'right'} : {float: 'left'};
    const bankSlider = this.state.currentSoundFormat === firstFormat ? {float:'left'}:{float:'right'};
    return (
      <div className="inner-container">
        <div className="control-container">
          <div className="constrol">
            <p>Power</p>
            <div className="select" onClick={this.powerControl}>
              <div className="inner" style={powerSlider}/>
            </div>
          </div>
          <p id="display">{this.state.display}</p>
          <div className="volume-slider">
            <input
              max="1"
              min="0"
              step="0.1"
              type="range"
              onChange={this.adjustVolume}
              value={this.state.sliderVal}
            />
          </div>
          <div className="constrol">
            <p>Sound Format</p>
            <div className="select" onClick={this.selectBank}>
              <div className="inner" style={bankSlider} />
            </div>
          </div>
        </div>
      </div>
    );
  }
  
}

export default App;
