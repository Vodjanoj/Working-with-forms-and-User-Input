import useInput from "../hooks/use-input";

const BasicForm = (props) => {
  const {
    enteredValue: enteredName,
    isValid: enteredNameIsValid,
    hasError: enteredNameHasError,
    valueChangeHandler: enteredNameChangeHandler,
    inputBlurHandler: enteredNameBlurHandler,
    reset: resetNameInput,
  } = useInput((value) => value.trim() !== "");

  const {
    enteredValue: enteredlastName,
    isValid: enteredLastNameIsValid,
    hasError: enteredLastNameHasError,
    valueChangeHandler: enteredLastNameChangeHandler,
    inputBlurHandler: enteredLastNameBlurHandler,
    reset: resetLastNameInput,
  } = useInput((value) => value.trim() !== "");

  const {
    enteredValue: enteredEmail,
    isValid: enteredEmailIsValid,
    hasError: enteredEmailHasError,
    valueChangeHandler: enteredEmailChangeHandler,
    inputBlurHandler: enteredEmailBlurHandler,
    reset: resetEmailInput,
  } = useInput((value) => value.includes("@") && value.trim().length > 6);

  let formIsValid = false;

  if (enteredNameIsValid && enteredLastNameIsValid && enteredEmailIsValid) {
    formIsValid = true;
  }

  const formSubmitHandler = (event) => {
    event.preventDefault();

    if (!formIsValid) {
      return;
    }

    console.log("Submitted");
    console.log(enteredName, enteredlastName, enteredEmail);

    resetNameInput();
    resetLastNameInput();
    resetEmailInput();
  };

  const nameInputClasses = enteredNameHasError
    ? "form-control invalid"
    : "form-control";

  const lastNameInputClasses = enteredLastNameHasError
    ? "form-control invalid"
    : "form-control";

  const emailInputClasses = enteredEmailHasError
    ? "form-control invalid"
    : "form-control";

  return (
    <form onSubmit={formSubmitHandler}>
      <div className="control-group">
        <div className={nameInputClasses}>
          <label htmlFor="name">First Name</label>
          <input
            type="text"
            id="name"
            onBlur={enteredNameBlurHandler}
            onChange={enteredNameChangeHandler}
            value={enteredName}
          />
          {enteredNameHasError && (
            <p className="error-text">Please enter a valid name</p>
          )}
        </div>
        <div className={lastNameInputClasses}>
          <label htmlFor="name">Last Name</label>
          <input
            type="text"
            id="name"
            onBlur={enteredLastNameBlurHandler}
            onChange={enteredLastNameChangeHandler}
            value={enteredlastName}
          />
          {enteredLastNameHasError && (
            <p className="error-text">Please enter a valid last name</p>
          )}
        </div>
      </div>
      <div className={emailInputClasses}>
        <label htmlFor="name">E-Mail Address</label>
        <input
          type="text"
          id="name"
          onBlur={enteredEmailBlurHandler}
          onChange={enteredEmailChangeHandler}
          value={enteredEmail}
        />
        {enteredEmailHasError && (
          <p className="error-text">Please enter a valid E-mail</p>
        )}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
