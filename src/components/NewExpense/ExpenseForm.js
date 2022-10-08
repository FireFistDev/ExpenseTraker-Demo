import "./ExpenseForm.css";
import { useState } from "react";
const ExpenseForm = function (props) {
  // const [enteredTitle,setEnteredTitle] = useState('')
  // const [enteredDate,setEnteredDate] = useState('')
  // const [enteredAmount,setEnteredAmount] = useState('')
  const [userInput, setUserInput] = useState({
    enteredTitle: "",
    enteredAmount: "",
    enteredDate: "",
  });
  const titleHandler = function (e) {
    setUserInput({
      ...userInput,
      enteredTitle: e.target.value,
    });
  };
  const amountHendler = function (e) {
    setUserInput({
      ...userInput,
      enteredAmount: e.target.value,
    });
  };
  const dateHendler = function (e) {
    setUserInput({
      ...userInput,
      enteredDate: e.target.value,
    });
  };
  const SubmitHendler = (e) => {
    e.preventDefault();
    const expenseDate = {
      title: userInput.enteredTitle,
      amount: +userInput.enteredAmount,
      date: new Date(userInput.enteredDate),
    };
    props.onSaveExpenseDate(expenseDate)
    setUserInput({
      enteredDate: "",
      enteredAmount: "",
      enteredTitle: "",
    });
    
  };

  return (
    <form onSubmit={SubmitHendler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={userInput.enteredTitle}
            onChange={titleHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>amount</label>
          <input
            type="number"
            min="1"
            step="1"
            value={userInput.enteredAmount}
            onChange={amountHendler}
          />
        </div>
        <div className="new-expense__control">
          <label>date</label>
          <input
            type="date"
            onChange={dateHendler}
            value={userInput.enteredDate}
          />
        </div>
        <div className="new-expense__actions">
          <button type="button" onClick={props.oNCancelButton}>CANCEL</button>
          <button type="submit">New Expense</button>
        </div>
      </div>
    </form>
  );
};

export default ExpenseForm;
