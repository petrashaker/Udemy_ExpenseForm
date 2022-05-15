import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import { useState } from "react";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

const Expenses = ({ expenses }) => {
  const [year, setYear] = useState('2022');

  const handleChangeYear = (year) => {
    setYear(year);
  }
  
  const filteredExpenses = expenses.filter(e => e.date.getFullYear().toString() === year);

  return (
    <>
      <Card className="expenses">
        <ExpensesFilter selectedYear={year} onYearChange={handleChangeYear} />
        <ExpensesChart expenses={filteredExpenses} />
        <ExpensesList filteredExpenses = {filteredExpenses} year = {year} />
      </Card>
    </>
  );
};

export default Expenses;
