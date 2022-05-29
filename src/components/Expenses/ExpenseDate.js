import React from 'react'
import "./ExpenseDate.css";

const ExpenseDate = ({ date }) => {
    const month = date.toLocaleString("en-Us", { month: "long" });
    const year = date.toLocaleString("en-US", { year: "numeric" });
    const day = date.toLocaleString("en-US", { day: "numeric" });

    return (
        <div className='expense-date '>
            <div className='expense-date__day'>{day}</div>
            <div className='expense-date__month'>{month}</div>
            <div className='expense-date__year'>{year}</div>
        </div>
    )
}

export default ExpenseDate