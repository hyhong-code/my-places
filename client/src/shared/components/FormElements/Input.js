import React, { useReducer, useEffect } from "react";
import { validate } from "../../utils/validators";
import "./Input.css";

const inputReducer = (state, action) => {
  const { type, payload, validators } = action;
  switch (type) {
    case "CHANGE":
      return {
        ...state,
        value: payload,
        isValid: validate(payload, validators),
      };
    case "TOUCH":
      return {
        ...state,
        isTouched: true,
      };
    default:
      return state;
  }
};

const Input = ({
  id,
  label,
  element,
  type,
  placeholder,
  rows,
  errorText,
  validators,
  onInput,
  value,
  valid,
}) => {
  const [inputState, dispatch] = useReducer(inputReducer, {
    value: value || "",
    isValid: valid || false,
    isTouched: false,
  });

  useEffect(() => {
    onInput(id, inputState.value, inputState.isValid);
  }, [inputState.value, inputState.isValid, onInput]);

  const changeHandler = (evt) => {
    dispatch({
      type: "CHANGE",
      payload: evt.target.value,
      validators,
    });
  };

  const touchHandler = () => {
    dispatch({
      type: "TOUCH",
    });
  };

  const elem =
    element === "input" ? (
      <input
        onChange={changeHandler}
        onBlur={touchHandler}
        id={id}
        type={type}
        placeholder={placeholder}
        value={inputState.value}
      />
    ) : (
      <textarea
        onChange={changeHandler}
        onBlur={touchHandler}
        id={id}
        rows={rows || 3}
        value={inputState.value}
      />
    );

  return (
    <div
      className={`form-control ${
        !inputState.isValid && inputState.isTouched && "form-control--invalid"
      }`}
    >
      <label htmlFor={id}>{label}</label>
      {elem}
      {!inputState.isValid && inputState.isTouched && <p>{errorText}</p>}
    </div>
  );
};

export default Input;
