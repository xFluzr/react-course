import React, { useState } from 'react';
import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import './ExpenseHolder.css';
import ExpenseFilter from './ExpenseFilter';
const ExpenseHolder = ({ expenses }) => {
  const [currentYear, setCurrentYear] = useState("2022");
 
  const selectYear = selectedYear => setCurrentYear(selectedYear);
  return (
    <Card className='expenses'>
      <ExpenseFilter selected={currentYear} onChangeYear={selectYear} />
      {expenses.filter((expense)=>expense.date.getFullYear()==currentYear).map((filteredExpense) => (
        <ExpenseItem
          key={filteredExpense.id}
          date={filteredExpense.date}
          title={filteredExpense.title}
          amount={filteredExpense.amount}
        />
      ))}
    </Card>


  )
}

export default ExpenseHolder