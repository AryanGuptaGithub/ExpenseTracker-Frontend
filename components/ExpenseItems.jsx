import React from 'react'


function ExpenseItems({ expense, getExpense }) {

  const handleDeleteExpense = (expenseID) => {
         fetch(`${import.meta.env.VITE_BACKEND_BASE_URL}/api/expenses/${expenseID}`, {
          method: 'DELETE'
         }).then(response => getExpense())
        
   }

  return (
    <div className='ExpenseItems'>

      <p className='Expense-Items-Description'>{expense.description}</p>

      <div style={{display:'flex', gap:'10px'}}>
      <p className='Expense-Items-Amount'> {expense.amount}₹ </p>
      <button className='Button' onClick={() => handleDeleteExpense(expense._id)}>❌</button>
      </div>      
    </div>
  )
}

export default ExpenseItems