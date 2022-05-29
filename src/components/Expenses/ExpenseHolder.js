import React, { useState } from 'react';
import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import './ExpenseHolder.css';
import ExpenseFilter from './ExpenseFilter';
const ExpenseHolder = ({expenses}) => {
  const [currentYear,setCurrentYear]=useState();

  const selectYear=(e)=>{
    setCurrentYear(e.target.value);
    console.log(currentYear)
  }

  return (
       <Card className='expenses'>
           <ExpenseFilter onSelectedYear={selectYear}/>
        <ExpenseItem
          date={expenses[0].date}
          title={expenses[0].title}
          price={expenses[0].price}
        />

      <ExpenseItem
        date={expenses[1].date}
        title={expenses[1].title}
        price={expenses[1].price} 
      />

      <ExpenseItem
        date={expenses[2].date}
        title={expenses[2].title}
        price={expenses[2].price} 
      />
    </Card>
  
   
  )
}

export default ExpenseHolder