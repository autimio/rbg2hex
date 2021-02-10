import React from "react";
import "./styles.css";

function InputText({
  label,
  name,
  value,
  color,
  type,
  min,
  max,
  maxLength,
  onChange,
}) {
  return (
    <div class="input" style={{ backgroundColor: color }}>
      <label>{label}</label>
      <input
        type={type}
        name={name}
        min={min}
        max={max}
        value={value}
        maxLength={maxLength}
        onChange={onChange}
      />
    </div>
  );
}

InputText.defaultProps = {
  type: "text",
  color: "black",
  value: 0,
  min: 0,
  max: 255,
  maxLength: 50,
};

export default InputText;
