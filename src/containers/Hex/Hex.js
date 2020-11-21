import React, { Component } from "react";
import classes from "./Hex.module.css";
import Background from "../../components/Background/Background";
import HexNumberBox from "../../components/HexNumberBox/HexNumberBox";

let hexCodes = ["#", "0", "0", "0", "0", "0", "0"];

if (localStorage.getItem("hexCodes") !== null) {
  hexCodes = JSON.parse(localStorage.getItem("hexCodes"));
}

class Hex extends Component {
  state = {
    hexCode: hexCodes
  };

  increaseHex = (hexCodePosition) => {
    let newHexCode = [...this.state.hexCode];
    const hexSingle = newHexCode[hexCodePosition];

    let newHexNum = hexSingle;
    if (Number.isInteger(parseInt(hexSingle))) {
      if (hexSingle === "9") {
        newHexNum = "A";
      } else {
        newHexNum = (parseInt(hexSingle) + 1).toString();
      }
    } else {
      switch (hexSingle) {
        case "A":
          newHexNum = "B";
          break;
        case "B":
          newHexNum = "C";
          break;
        case "C":
          newHexNum = "D";
          break;
        case "D":
          newHexNum = "E";
          break;
        case "E":
          newHexNum = "F";
          break;
        case "F":
          newHexNum = "0";
          break;
        default:
          break;
      }
    }
    newHexCode[hexCodePosition] = newHexNum;
    this.setState(
      {
        hexCode: newHexCode
      },
      () => localStorage.setItem("hexCodes", JSON.stringify(newHexCode))
    );
  };

  decreaseHex = (hexCodePosition) => {
    let newHexCode = [...this.state.hexCode];
    const hexSingle = newHexCode[hexCodePosition];

    let newHexNum = hexSingle;
    if (Number.isInteger(parseInt(hexSingle))) {
      if (hexSingle === "0") {
        newHexNum = "F";
      } else {
        newHexNum = (parseInt(hexSingle) - 1).toString();
      }
    } else {
      switch (hexSingle) {
        case "A":
          newHexNum = "9";
          break;
        case "B":
          newHexNum = "A";
          break;
        case "C":
          newHexNum = "B";
          break;
        case "D":
          newHexNum = "C";
          break;
        case "E":
          newHexNum = "D";
          break;
        case "F":
          newHexNum = "E";
          break;
        default:
          break;
      }
    }
    newHexCode[hexCodePosition] = newHexNum;
    this.setState(
      {
        hexCode: newHexCode
      },
      () => localStorage.setItem("hexCodes", JSON.stringify(newHexCode))
    );
  };

  render() {
    const hexCodeList = [];
    for (var j = 0; j < this.state.hexCode.length; j++) {
      const hexCodePosition = j;
      if (this.state.hexCode[j] === "#") {
        hexCodeList.push(
          <HexNumberBox
            key={j}
            hashtag={true}
            index={j}
            number={this.state.hexCode[j]}
          />
        );
      } else {
        hexCodeList.push(
          <HexNumberBox
            key={j}
            index={j}
            position={hexCodePosition}
            number={this.state.hexCode[j]}
            increaseHexNumber={this.increaseHex}
            decreaseHexNumber={this.decreaseHex}
          />
        );
      }
    }

    return (
      <Background hexColorCodeList={this.state.hexCode}>
        <div className={classes.HexCodeBox}>{hexCodeList}</div>
      </Background>
    );
  }
}

export default Hex;
