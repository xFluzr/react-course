import React, { useState } from 'react';
import './ExpenseForm.css';

const ExpenseForm = ({onSaveExpenseData}) => {
    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredDate, setEnteredDate] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');

    const titleHandler = e => {
        setEnteredTitle(e.target.value)
    }
    const dateHandler = e => {
        setEnteredDate(e.target.value)
    }
    const amountHandler = e => {
        setEnteredAmount(e.target.value)
    }

    const submitHandler = (e)=>{
        const expenseData ={
            title: enteredTitle,
            amount: enteredAmount,
            date: new Date(enteredDate)
        }
        onSaveExpenseData(expenseData);
        setEnteredTitle('');
        setEnteredDate('');
        setEnteredAmount('');
        e.preventDefault();
    }


    return (
        <form onSubmit={submitHandler}>
            <div className='new-expense__controls'>
                <div className='new-expense__control'>
                    <label>Title</label>
                    <input
                        type='text'
                        value={enteredTitle}
                        onChange={titleHandler}
                    />
                </div>
                <div className='new-expense__control'>
                    <label>Date</label>
                    <input
                        type='date'
                        min="2018-01-01"
                        max="2023-12-31"
                        value={enteredDate}
                        onChange={dateHandler}
                    />
                </div>
                <div className='new-expense__control'>
                    <label>Amount</label>
                    <input 
                    type='number' 
                    min='0.00' 
                    step="0.1" 
                    value={enteredAmount}
                    onChange={amountHandler}
                    />
                </div>

            </div>
            <div className='new-expense__actions'>
                <button type="submit" >Add Expense</button>
            </div>
        </form>
    )
}

export default ExpenseForm;