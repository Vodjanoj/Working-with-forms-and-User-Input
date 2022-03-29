import { useState } from "react";

const useInput = (validValue) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [IsTouched, setIsTouched] = useState(false);

  const valueIsValid = validValue(enteredValue);
  const hasError = !valueIsValid && IsTouched;

  const valueChangeHandler = (event) => {
    setEnteredValue(event.target.value);
  };

  const inputBlurHandler = () => {
    setIsTouched(true);
  };

  const reset = () => {
    setEnteredValue("");
    setIsTouched(false);
  };

  return {
    enteredValue: enteredValue,
    isValid: valueIsValid,
    hasError: hasError,
    valueChangeHandler,
    inputBlurHandler,
    reset,
  };
};

export default useInput;