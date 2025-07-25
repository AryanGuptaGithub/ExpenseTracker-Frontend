import React, { useState } from 'react'
import AddExpenseForm from './AddExpenseForm'
import { MdOutlineAdd } from "react-icons/md";
import Split from './Split';

const AddExpense = ({expenses, handleSetPeople, handleSplitButton}) => {
    const [formVisibility, setFormVisibilty] = useState(false);
    const toggleFormVisibility = () => setFormVisibilty(!formVisibility);

    const onFormClose = () => {
        setFormVisibilty(false);
    }

  return (
    <>
     {/* Conditionally rendering Form if formVisibility is true */}
    {formVisibility &&  <AddExpenseForm expenses={expenses} onFormClose={onFormClose} />} 
    {!formVisibility &&  <button className='Addbutton' onClick={toggleFormVisibility} > Add Expense </button> }
    
    {/* Thisis a split Button */}
     <Split handleSetPeople={handleSetPeople} handleSplitButton={handleSplitButton}/>  

    </>
  )
}

export default AddExpense 