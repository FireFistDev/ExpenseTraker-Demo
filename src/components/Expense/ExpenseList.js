import "./ExpenseList.css";
import ExpenseItem from "./ExpenseItem";
const ExpenseList = (props) => {
  if (props.item.length === 0) {
    return <h2 className="expenses-list__fallback">No Expense Here</h2>;
  }

  if (props.item.length > 0) {
    return (
      <ul className="expenses-list">
        {props.item.map((expense) => (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))}
      </ul>
    );
  }
};

export default ExpenseList;
