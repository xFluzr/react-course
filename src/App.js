import React,{useState} from 'react';
import "./index.css";
import ExpenseHolder from './components/Expenses/ExpenseHolder';
import NewExpense from './components/NewExpense/NewExpense';

const data = [
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

const App = () => {
  const [expenses,setExpenses]=useState(data)

  const addExpenseHandler =expense=>{
      setExpenses((prevExpenses)=>{
        return [expense, ...prevExpenses]
      });
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler}/>
      <ExpenseHolder expenses={expenses}/>
    </div>
  )
}

export default App;

