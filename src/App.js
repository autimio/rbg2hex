import React, { useState } from "react";

import InputText from "./components/atoms/InputText";
import "./styles.css";

const MAX_VALUE = 255;

function App() {
  const [redValue, setRedValue] = useState(0);
  const [greenValue, setGreenValue] = useState(0);
  const [blueValue, setBlueValue] = useState(0);

  function onChangeInputText(event, setState) {
    const value = event.target.value;
    if (value === isNaN || value > MAX_VALUE) return;
    setState(value)
  }

  function base10Tobase16(number) {
    let hex = Number(number).toString(16);
    if (hex.length < 2) hex = "0" + hex;
    return hex;
  }

  function colorHex(r, g, b) {
    const red = base10Tobase16(r);
    const green = base10Tobase16(g);
    const blue = base10Tobase16(b);
    return `#${red}${green}${blue}`;
  }

  return (
    <div
      class="container"
      style={{
        backgroundColor: `rgb(${redValue},${greenValue},${blueValue})`,
      }}
    >
      <div class="box">
        <InputText
          label="Red"
          name="red"
          color="red"
          type="number"
          value={redValue}
          maxLength={3}
          onChange={(event) => onChangeInputText(event, setRedValue)}
        />
        <InputText
          label="Green"
          name="green"
          color="green"
          type="number"
          value={greenValue}
          maxLength={3}
          onChange={(event) => onChangeInputText(event, setGreenValue)}
        />
        <InputText
          label="Blue"
          name="blue"
          color="blue"
          type="number"
          value={blueValue}
          maxLength={3}
          onChange={(event) => onChangeInputText(event, setBlueValue)}
        />
      </div>
      <label id="text-hexadecimal-color">
        Hexadecimal Color: 
        <label id="text-hexadecimal-color-result">
          {` ${colorHex(redValue, greenValue, blueValue)}`}
        </label>
      </label>
    </div>
  );
}

export default App;
