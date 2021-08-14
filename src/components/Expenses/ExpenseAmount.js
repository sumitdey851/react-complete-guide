import React from "react"; //Optional in modern react projects
import "./ExpenseAmount.css";

function ExpenseAmount(props) {
  return <div className="expense-item__price">₹{props.amount}</div>;
}

export default ExpenseAmount;