import ExpenseDate from "./ExpenseDate";
import ExpenseAmount from "./ExpenseAmount";
import "./ExpenseItem.css";

function ExpenseItem(props) {
  return (
    <div className="expense-item">
      <ExpenseDate date={props.date}/>
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <ExpenseAmount amount={props.amount}></ExpenseAmount>
      </div>
    </div>
  );
}

export default ExpenseItem;
