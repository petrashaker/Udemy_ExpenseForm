import ExpenseItem from "./ExpenseItem";

import "./ExpensesList.css";

const ExpensesList = ({filteredExpenses, year}) => {
  if(filteredExpenses.length === 0) {
    return <h2 className="expenses-list__fallback">Found no expenses.</h2>
  }

  return (
      <ul className="expenses-list">
        {filteredExpenses.map((expense) => (
        <ExpenseItem
            key={expense.id}
            expenseDate={expense.date}
            expenseItem={expense.title}
            price={expense.amount}
            chosenYear={year}
        />
        ))}
      </ul>
  )
}

export default ExpensesList;