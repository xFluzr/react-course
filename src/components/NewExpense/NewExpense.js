import React,{useState} from 'react';
import ExpenseForm from './ExpenseForm';
import "./NewExpense.css"
const NewExpense = ({onAddExpense}) => {
  const [showForm,setShowForm]=useState(false);
    const saveExpenseDataHandler = (enterExpenseData) => {
    const expenseData = {
      ...
      enterExpenseData,
      id: Math.floor(Math.random()*100).toString()
    }
    onAddExpense(expenseData)
  }

  const showElement = ()=>{
    setShowForm(!showForm);
  }
  return (
    <div className='new-expense'>
      {showForm ?<ExpenseForm onSaveExpenseData={saveExpenseDataHandler} setShowForm={setShowForm} showForm={showForm}/>: <button type='button' onClick={showElement} >Add new Expense</button>}
     
    </div>
  )
}

export default NewExpense;