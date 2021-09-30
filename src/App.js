import React from "react";
import "./App.scss";
import firstFormat from "./sounds/firstFormat";
import secondFormat from "./sounds/seconfFormat";
import PadBank from "./component/padBank.component";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      power: true,
      display: String.fromCharCode(160),
      currentSoundFormat: firstFormat,
      currentSoundId: "Heart Kit",
      sliderVal: 0.3,
    };
  }

  powerControl = () => {
    this.setState({
      power: !this.state.power,
      display: String.fromCharCode(160),
    });
  };

  selectSoundFormat = () => {
    if (this.state.power) {
      if (this.state.currentSoundId === "Heart Kit") {
        this.setState({
          currentSoundFormat: secondFormat,
          display: "Smooth Piano Kit",
          currentSoundId: "Smooth Piano Kit",
        });
      } else {
        this.setState({
          currentSoundFormat: firstFormat,
          display: "Heart Kit",
          currentSoundId: "Heart Kit",
        });
      }
    }
  };
  //Adjust Drum volume
  adjustVolume = (e) => {
    //check if power button is on or not
    if (this.state.power) {
      this.setState({
        sliderVal: e.target.value,
        display: "Volume: " + Math.round(e.target.value * 100),
      });
      setTimeout(() => this.clearDisplay(), 1000);
    }
  };

  displayClipName = (name) => {
    if (this.state.power) {
      this.setState({
        display: name,
      });
    }
  };
  //function to clrear volume area
  clearDisplay = () => {
    this.setState({
      display: String.fromCharCode(160),
    });
  };
  render() {
    const powerSlider = this.state.power
      ? { float: "right" }
      : { float: "left" };
    const bankSlider =
      this.state.currentSoundFormat === firstFormat
        ? { float: "left" }
        : { float: "right" };
    {
      const clips = [].slice.call(document.getElementsByClassName("clip"));
      clips.forEach((sound) => {
        sound.volume = this.state.sliderVal;
      });
    }
    return (
      <div className="inner-container">
        <h1>Drum-Mach</h1>
        <PadBank
          clipVolume={this.state.sliderVal}
          currentPadBank={this.state.currentSoundFormat}
          power={this.state.power}
          updateDisplay={this.displayClipName}
        />

        <div className="controls-container  ">
          <div className="control">
            <p>Power</p>
            <div className="select" onClick={this.powerControl}>
              <div className="inner" style={powerSlider} />
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
          <div className="control">
            <p>Mode</p>
            <div className="select" onClick={this.selectSoundFormat}>
              <div className="inner" style={bankSlider} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
