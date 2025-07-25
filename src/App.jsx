import React, { useEffect } from 'react'
import { useState } from 'react';
import './App.css'
import './index.css'
import ExpenseList from '../components/ExpenseList';
import AddExpense from '../components/AddExpense';
import Navigation from '../components/Navigation';
import TotalExpense from '../components/TotalExpense';


function App() {
  const [expenses, setExpenses] = useState([]);
const [totalExpense, setTotalExpense] = useState(0);
const [people, setPeople] = useState(0);
 const [split, setSplit] = useState(false);

// useEffect(()=>{
//   console.log(people);

// },[people])

useEffect(() => {
  getExpenses();
}, []);

useEffect(() => {
  calculateAndSetTotalExpense();
}, [expenses]);

const getExpenses = async () => {
  try {
    const response = await fetch(`${import.meta.env.VITE_BACKEND_BASE_URL}/api/expenses`);
    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
    const data = await response.json();
    setExpenses(data);
  } catch (error) {
    console.error('Error fetching expenses:', error);
  }
};

const calculateAndSetTotalExpense = () => {
  const total = Array.isArray(expenses)
    ? expenses.reduce((acc, expense) => acc + expense.amount, 0)
    : 0;
  setTotalExpense(total);
};

const handleSetPeople = (people) => {
  setPeople(people);
};

const handleExpenseChange = () => {
  getExpenses();
};

const handleSplitButton = (value) => {
  setSplit(value);
};


  // useEffect(()=>{
  //   console.log(split);
  // },[split])


  return (
    <> 
      
      <div className='App'>
       <Navigation />
        <div className='AppContainer'>
        <div className="container">
         <TotalExpense totalExpense={totalExpense} peopleData={people} handleSetPeople={handleSetPeople} split={split}/>

        <ExpenseList expenses={expenses} getExpense={handleExpenseChange} />
          </div>
         </div>
        </div>
 <AddExpense expenses={handleExpenseChange} handleSetPeople={handleSetPeople} handleSplitButton={handleSplitButton}/>
        
    </>
  )
}

export default App
