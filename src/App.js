import React, { useState } from 'react';

import './styles.css';

function App() {
  const [redValue, setRedValue] = useState(0);
  const [greenValue, setGreenValue] = useState(0);
  const [blueValue, setBlueValue] = useState(0);

  function onChange(color, event) {
    switch (color) {
      case 'red':
        setRedValue(event.target.value);
        break;
      case 'green':
        setGreenValue(event.target.value);
        break;
      case 'blue':
        setBlueValue(event.target.value);
        break;
      default:
        break;
    }
  }

  return (
    <div
      style={{
        backgroundColor: `rgb(${redValue},${greenValue},${blueValue})`,
      }}
    >
      <label>Red</label>
      <input
        type="number"
        name="red"
        min={0}
        max={255}
        value={redValue}
        onChange={(event) => onChange('red', event)}
      />

      <label>Green</label>
      <input
        type="number"
        name="green"
        min={0}
        max={255}
        value={greenValue}
        onChange={(event) => onChange('green', event)}
      />

      <label>Blue</label>
      <input
        type="number"
        name="blue"
        min={0}
        max={255}
        value={blueValue}
        onChange={(event) => onChange('blue', event)}
      />
    </div>
  );
}

export default App;
