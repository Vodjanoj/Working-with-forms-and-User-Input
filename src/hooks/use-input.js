import { useReducer } from "react";

const initialInputState = {
  value: "",
  isTouched: false,
};

const inputStateReducer = (state, action) => {
  if (action.type === "INPUT") {
    return { value: action.value, isTouched: state.isTouched }; // isTouched: state.isTouched is actually not needed here, we use just current value
  }
  if (action.type === "BLUR") {
    return { isTouched: true, value: state.value }; // value: state.value is actually not needed here, we use just current value
  }
  if (action.type === "RESET") {
    return { isTouched: false, value: "" };
  }

  return {
    inputStateReducer,
  };
};

const useInput = (validValue) => {
  // const [enteredValue, setEnteredValue] = useState("");
  // const [IsTouched, setIsTouched] = useState(false);

  const [inputState, dispatch] = useReducer(
    inputStateReducer,
    initialInputState
  );

  // const valueIsValid = validValue(enteredValue);
  const valueIsValid = validValue(inputState.value);
  const hasError = !valueIsValid && inputState.isTouched;

  const valueChangeHandler = (event) => {
    dispatch({ type: "INPUT", value: event.target.value });
    // setEnteredValue(event.target.value);
  };

  const inputBlurHandler = () => {
    // setIsTouched(true);
    dispatch({ type: "BLUR" });
  };

  const reset = () => {
    dispatch({ type: "RESET" });
  };

  return {
    enteredValue: inputState.value,
    isValid: valueIsValid,
    hasError: hasError,
    valueChangeHandler,
    inputBlurHandler,
    reset,
  };
};

export default useInput;
