import React from 'react';
import "./index.css";
import ExpenseItem from './components/ExpenseItem';
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

      <ExpenseItem
        date={expenses[0].date}
        title={expenses[0].title}
        price={expenses[0].price}
      />

      <ExpenseItem
        date={expenses[1].date}
        title={expenses[1].title}
        price={expenses[1].price} />

      <ExpenseItem
        date={expenses[2].date}
        title={expenses[2].title}
        price={expenses[2].price} />

    </div>
  )
}

export default App;

