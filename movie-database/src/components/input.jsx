import React from "react";


const Input = ({ name, label, value, onChange }) => {
  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <input
        value={value}
        onChange={onChange}
        autoFocus
        id={name}
        type="text"
        className="form-control"
        name={name}
      />
    </div>
  );
};

export default Input;

