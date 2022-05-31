import React, { useState } from 'react';
import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import './ExpenseHolder.css';
import ExpenseFilter from './ExpenseFilter';
const ExpenseHolder = ({ expenses }) => {
  const [currentYear, setCurrentYear] = useState("2022");
 
  const selectYear = selectedYear => setCurrentYear(selectedYear);

  let expensesContent= <p>Not found</p>;
  if(expenses.filter((expense)=>expense.date.getFullYear().toString()===currentYear).map((filteredExpense) => (
    <ExpenseItem key={filteredExpense.id} date={filteredExpense.date} title={filteredExpense.title} amount={filteredExpense.amount}/>)).length>0){
      
    expensesContent=expenses.filter((expense)=>expense.date.getFullYear().toString()===currentYear).map((filteredExpense) => (
      <ExpenseItem
        key={filteredExpense.id}
        date={filteredExpense.date}
        title={filteredExpense.title}
        amount={filteredExpense.amount}
      />
    )) 
  }
  return (
    <Card className='expenses'>
      <ExpenseFilter selected={currentYear} onChangeYear={selectYear} />
      {expensesContent}
    </Card>


  )
}

export default ExpenseHolder