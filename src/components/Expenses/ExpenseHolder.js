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
      {expenses.map((expense) => (
        <ExpenseItem
          date={expense.date}
          title={expense.title}
          price={expense.price}
        />
      ))}
    </Card>


  )
}

export default ExpenseHolder