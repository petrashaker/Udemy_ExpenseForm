import { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css"

const NewExpense = ({ handleDataIncome }) => {
  const [hideFilter, setHideFilter] = useState(false);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString()
    };
    handleDataIncome(expenseData);
    setHideFilter(false);
  };

  const handleFilterVisibility = () => {
    setHideFilter(!hideFilter)
  };

  return (
    <div className="new-expense">
      {!hideFilter && <button onClick={handleFilterVisibility}>Add New Expense</button> }
      {hideFilter && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel={handleFilterVisibility} />}
    </div>
  );
};

export default NewExpense;
