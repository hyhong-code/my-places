import React from "react";
import "./Input.css";

const Input = ({ id, label, element, type, placeholder, rows }) => {
  const elem =
    element === "input" ? (
      <input id={id} type={type} placeholder={placeholder} />
    ) : (
      <textarea id={id} rows={rows || 3}></textarea>
    );

  return (
    <div className={`form-control`}>
      <label htmlFor={id}>{label}</label>
      {elem}
    </div>
  );
};

export default Input;
