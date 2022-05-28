import React from 'react';
import ExpenseDate from './ExpenseDate';


const ExpenseItem = ({ title, price, date }) => {

    return (
        <div className='expense-item'>
            <div className='expense-item__description'>
                <h2>{title}</h2>
            </div>
            <div>
                <ExpenseDate date={date}/>
            </div>
            <div className='expense-item__price'>
                ${price}
            </div>
        </div>
    )
}

export default ExpenseItem