import React from "react"; //Optional in modern react projects
import ExpenseDate from "./ExpenseDate";
import ExpenseAmount from "./ExpenseAmount";
import Card from "../UI/Card";
import "./ExpenseItem.css";

const ExpenseItem = (props) => {
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date}/>
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <ExpenseAmount amount={props.amount}></ExpenseAmount>
      </div>
    </Card>
  );
}

export default ExpenseItem;
