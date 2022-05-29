import React from 'react';
import ExpenseForm from './ExpenseForm';
import "./NewExpense.css"
const NewExpense = ({onAddExpense}) => {
  const saveExpenseDataHandler = (enterExpenseData) => {
    const expenseData = {
      ...
      enterExpenseData,
      id: Math.floor(Math.random()*100).toString()
    }
    onAddExpense(expenseData)
  }
  return (
    <div className='new-expense'>
      <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
    </div>
  )
}

export default NewExpense;