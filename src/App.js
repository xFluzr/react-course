import React from 'react';
import "./index.css";

import ExpenseHolder from './components/ExpenseHolder';
const App = () => {
  const expenses = [
    {
      id: 1,
      date: new Date("2022-05-23"),
      title: "Learning Norwegian",
      price: 6969
    },
    {
      id: 2,
      date: new Date("2021-04-21"),
      title: "Speaking Norwegian",
      price: 760
    },
    {
      id: 3,
      date: new Date("2003-6-13"),
      title: "Cleaning houses",
      price: 492
    }
  ];
  return (
    <div>
      <h2>React App</h2>
      <p>This is also Visible</p>
      <ExpenseHolder expenses={expenses}/>
      

    </div>
  )
}

export default App;

