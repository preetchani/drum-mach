import React from "react";
import DrumPad from "./drumPad.component";
class PadBank extends React.Component {
 
  render() {
    let padBank;
    if (this.props.power) {
      padBank = this.props.currentPadBank.map((dObj, i, padBankArr) => {
        return (
          <DrumPad
            key={i}
            clip={padBankArr[i].url}
            clipId={padBankArr[i].id}
            keyCode={padBankArr[i].keyCode}
            keyTrigger={padBankArr[i].keyTrigger}
            power={this.props.power}
            updateDisplay={this.props.updateDisplay}
          />
        );
      });
    } else {
      padBank = this.props.currentPadBank.map((dObj, i, padBankArr) => {
        return (
          <DrumPad
            clip="#"
            key={i}
            clipId={padBankArr[i].id}
            keyCode={padBankArr[i].keyCode}
            keyTrigger={padBankArr[i].keyTrigger}
            power={this.props.power}
            updateDisplay={this.props.updateDisplay}
          />
        );
      });
    }
    return <div className="pad-bank">{padBank}</div>;
  }
}

export default PadBank;
