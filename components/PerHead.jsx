import React from 'react';
import SplitingIn from './SplitingIn'; // You forgot this import

const PerHead = ({ people, giveMeSpltingInData, perHead }) => {
  return (
    <div className='per-head'>
      <SplitingIn peopleNumber={people} giveMeSpltingInData={giveMeSpltingInData} /> 
      <h1>₹{perHead}</h1>
      <p>Per Head</p>
    </div>
  );
};

export default PerHead;
