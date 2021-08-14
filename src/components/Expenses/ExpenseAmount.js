import React from "react"; //Optional in modern react projects
import "./ExpenseAmount.css";

const ExpenseAmount = (props) => {
  return <div className="expense-item__price">₹{props.amount}</div>;
}

export default ExpenseAmount;