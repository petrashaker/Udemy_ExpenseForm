import { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/ExpenseNew/NewExpense";
import expenses from "./expensesData";

function App() {
  const [allData, setAllData] = useState(expenses);

  const handleDataIncome = (newDataIncome) => {
    setAllData(prevExpenses =>  [...prevExpenses, newDataIncome])
  };

  return (
    <>
      <NewExpense handleDataIncome={handleDataIncome} />
      <Expenses expenses={allData}  />
    </>
  );
};

export default App;
