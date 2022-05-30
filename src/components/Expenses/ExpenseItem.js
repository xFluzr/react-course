import React, { useState } from 'react';
import ExpenseDate from './ExpenseDate';
import "./ExpenseItem.css"
import Card from "../UI/Card";

const ExpenseItem = ({ title, price, date }) => {


    return (
        <Card className='expense-item'>
            <div>
                <ExpenseDate date={date} />
            </div>
            <div className='expense-item__description'>
                <h2>{title}</h2>
            </div>

            <div className='expense-item__price'>
                ${price}
            </div>
            
        </Card>
    )
}

export default ExpenseItem