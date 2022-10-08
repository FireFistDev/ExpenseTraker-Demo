import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "../ExpenseFilter/ExpenseFilter";
import { useState } from "react";
import ExpenseList from "./ExpenseList";
import ExpenseChart from "./ExpenseChart";
const Expenses = function (props) {
  const [FilterYear, setFilterYear] = useState("2020");

  const ExpenseFilterHendler = function (enteredYear) {
    setFilterYear(enteredYear);
  };
  const FilteredExpsense = props.expenses.filter((expense) => {
    return expense.date.getFullYear() === +FilterYear;
  });

  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={FilterYear}
        onExpenseFilter={ExpenseFilterHendler}
      />

      <ExpenseChart expenses={FilteredExpsense}></ExpenseChart>
      <ExpenseList item={FilteredExpsense}></ExpenseList>
    </Card>
  );
};

export default Expenses;
