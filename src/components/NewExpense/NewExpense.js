import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
import { useState } from "react";

function NewExpense(props) {
    const expenseDataHendler = (expense)=>{
        const expenseDate = {
            ...expense,
            id:Math.floor(Math.random() * 20)
        }
        props.onAddExpenses(expenseDate)
    }
    const[isEditing,setIsEditing] = useState(false)

    const StartEditingHendler = ()=>{
      setIsEditing(true)  
      
    }
    const cancelHenldler = ()=>{
      setIsEditing(false)
    }

  return (
    <div className="new-expense">
      {!isEditing && <button onClick={StartEditingHendler}>Add new Expense</button>}
      {isEditing &&<ExpenseForm onSaveExpenseDate = {expenseDataHendler} oNCancelButton={cancelHenldler}/>}
    </div>
  );
}

export default NewExpense;
