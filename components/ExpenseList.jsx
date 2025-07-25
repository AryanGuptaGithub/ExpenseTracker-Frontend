import React from 'react'
import ExpenseItems from './ExpenseItems'



const ExpenseList = ({expenses, getExpense,}) => {
  
  return (
    <div className='Expense-List'>
        
        {expenses?.length > 0 && expenses.map(expense => <ExpenseItems key={expense.id} expense={expense} getExpense={getExpense}/>)}
    </div>
  )
}

export default ExpenseList