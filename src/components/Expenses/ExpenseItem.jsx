import Card from "../UI/Card";
import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";

const ExpenseItem = ({ expenseDate, expenseItem, price, }) => {
  return (
    <li>
    <Card className="expense-item">
      <ExpenseDate expenseDate={expenseDate} />
      <div className="expense-item__description">
        <h2>{expenseItem}</h2>
        <div className="expense-item__price">$ {price}</div>
      </div>
    </Card>
    </li>
  );
};

export default ExpenseItem;
