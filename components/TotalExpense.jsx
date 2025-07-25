// TotalExpense.jsx
import React from 'react';
import PerHead from './PerHead'; 

const TotalExpense = ({ totalExpense, peopleData, handleSetPeople,split }) => {
  const perHeadAmount = peopleData > 0 ? (totalExpense / peopleData).toFixed(2) : 0;

  return (
    <div className='total-expense'>
      <div className='total-expense-head'>
        {totalExpense && (
          <h1 style={{ fontSize: '2.5rem', color: '#4fb017' }}>
            {totalExpense}₹
          </h1>
        )}
        <p>Total</p>
      </div>

      { split && <PerHead people={peopleData} giveMeSpltingInData={handleSetPeople} perHead={perHeadAmount}/> } 

    </div>
  );
};

export default TotalExpense;
