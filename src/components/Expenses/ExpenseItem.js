import React, { useState } from 'react';
import ExpenseDate from './ExpenseDate';
import "./ExpenseItem.css"
import Card from "../UI/Card";

const ExpenseItem = ({ title, price, date }) => {

    const [propsTitle, setPropsTitle] = useState(title);
    const [selectedYear,setSelectedYear] =useState("");
    const clickHandler = () => {
        setPropsTitle("Updated");
    }

   


    return (
        <Card className='expense-item'>
            <div>
                <ExpenseDate date={date} />
            </div>
            <div className='expense-item__description'>
                <h2>{propsTitle}</h2>
            </div>

            <div className='expense-item__price'>
                ${price}
            </div>
            <button onClick={clickHandler} type='button'>Click me</button>
        </Card>
    )
}

export default ExpenseItem