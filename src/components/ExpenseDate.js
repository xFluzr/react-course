import React from 'react'

const ExpenseDate = ({date}) => {
    const month = date.toLocaleString("en-Us",{month:"long"});
    const year = date.toLocaleString("en-US",{year:"numeric"});
    const day= date.toLocaleString("en-US",{day:"numeric"});

  return (
    <div>
        <div>{day}</div>
        <div>{month}</div>
        <div>{year}</div>
    </div>
  )
}

export default ExpenseDate