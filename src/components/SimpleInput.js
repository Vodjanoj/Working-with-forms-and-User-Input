import { useState } from "react";

const SimpleInput = (props) => {
  const [enteredName, setEnteredName] = useState("");
  const [enteredNameTouched, setEnteredNameTouched] = useState(false);

  const enteredNameIsValid = enteredName.trim() !== "";
  console.log("enteredNameIsValid " + enteredNameIsValid);
  const nameInputIsInvalid = !enteredNameIsValid && enteredNameTouched; // because only if it was touched and it's then is invalid I wanna treat it as invalid(nameInputIsInvalid)
  console.log("!enteredNameIsValid " + !enteredNameIsValid);

  let formIsValid = false;

  // I'm interested in the validity of my form inputs and hence I'll add all the form input validities I have in this form here.
  if (enteredNameIsValid) {
    formIsValid = true;
  }

  const nameInputChangeHandler = (event) => {
    setEnteredName(event.target.value);
  };

  const nameInputBlurHandler = (event) => {
    setEnteredNameTouched(true);
  };

  const formSubmissionHandler = (event) => {
    event.preventDefault();

    setEnteredNameTouched(true);

    if (!enteredNameIsValid) {
      // trim() is to remove any excess white space at the beginning and end.

      return;
    }

    // nameInputRef.current.value = '', => not ideal, don't manipulate the dom
    setEnteredName(""); // if you want to reset entered value use useState
    setEnteredNameTouched(false); // I want to set setEnteredNameTouched to false to reset the touched state, because once the form is submitted,
    //it of course, should again act as if it wasn't touched at all because it's a brand new form now in the end.
  };

  console.log("nameInputIsInvalid " + nameInputIsInvalid);

  const nameInputClasses = nameInputIsInvalid
    ? "form-control invalid"
    : "form-control";

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameInputClasses}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          onChange={nameInputChangeHandler}
          onBlur={nameInputBlurHandler}
          value={enteredName}
        />
      </div>
      {nameInputIsInvalid && (
        <p className="error-text">Name must not be empty</p>
      )}
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
