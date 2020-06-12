import React, { useReducer } from "react";
import "./Input.css";

const inputReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case "CHANGE":
      return { ...state, value: payload, isValid: true };
    default:
      return state;
  }
};

const Input = ({ id, label, element, type, placeholder, rows, errorText }) => {
  const [inputState, dispatch] = useReducer(inputReducer, {
    value: "",
    isValid: false,
  });

  const changeHandler = (evt) => {
    dispatch({
      type: "CHANGE",
      payload: evt.target.value,
    });
  };

  const elem =
    element === "input" ? (
      <input
        onChange={changeHandler}
        id={id}
        type={type}
        placeholder={placeholder}
        value={inputState.value}
      />
    ) : (
      <textarea
        onChange={changeHandler}
        id={id}
        rows={rows || 3}
        value={inputState.value}
      />
    );

  return (
    <div
      className={`form-control ${
        !inputState.isValid && "form-control--invalid"
      }`}
    >
      <label htmlFor={id}>{label}</label>
      {elem}
      {!inputState.isValid && <p>{errorText}</p>}
    </div>
  );
};

export default Input;
