import React, { useState } from "react";

import InputText from "./components/atoms/InputText";
import "./styles.css";

function App() {
  const [redValue, setRedValue] = useState(0);
  const [greenValue, setGreenValue] = useState(0);
  const [blueValue, setBlueValue] = useState(0);

  function onChangeInputText(color, event) {
    if (event.target.value === isNaN) return;
    if (event.target.value > 255) return alert("Opa, numero passou do limite!");

    switch (color) {
      case "red":
        setRedValue(event.target.value);
        break;
      case "green":
        setGreenValue(event.target.value);
        break;
      case "blue":
        setBlueValue(event.target.value);
        break;
      default:
        break;
    }
  }

  function rgbToHex(rgb) {
    var hex = Number(rgb).toString(16);
    if (hex.length < 2) {
      hex = "0" + hex;
    }
    return hex;
  }

  function fullColorHex(r, g, b) {
    var red = rgbToHex(r);
    var green = rgbToHex(g);
    var blue = rgbToHex(b);
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
          label={"Red"}
          name={"red"}
          color={"red"}
          type={"number"}
          value={redValue}
          maxLength={3}
          onChange={(event) => onChangeInputText("red", event)}
        />

        <InputText
          label={"Green"}
          name={"green"}
          color={"green"}
          type={"number"}
          value={greenValue}
          maxLength={3}
          onChange={(event) => onChangeInputText("green", event)}
        />

        <InputText
          label={"Blue"}
          name={"blue"}
          color={"blue"}
          type={"number"}
          value={blueValue}
          maxLength={3}
          onChange={(event) => onChangeInputText("blue", event)}
        />
      </div>

      <label id="text-hexadecimal-color">
        Hexadecimal Color:
        <label id="text-hexadecimal-color-result">
          {" "}
          {fullColorHex(redValue, greenValue, blueValue)}{" "}
        </label>
      </label>
      {/* <FaCopy color="green" /> */}
    </div>
  );
}

export default App;
