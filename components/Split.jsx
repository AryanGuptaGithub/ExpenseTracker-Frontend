import React from 'react'
import { FaPeopleGroup } from "react-icons/fa6";
import { useState } from 'react';
import SplitList from './SplitList';


const Split = ({ handleSetPeople, handleSplitButton }) => {
  const [split, setSplit] = useState(false);

  const onSplitClick = () => {
    const newValue = !split;
    setSplit(newValue);
    handleSplitButton(newValue); // pass state to App.jsx
  };

  return (
    <div className='Split-Container'>
      <div
        className='Split'
        style={split ? { backgroundColor: '#ff811b', color: 'white' } : {}}
        onClick={onSplitClick}
      >
        <p>Split</p>
        <span className='Split-Icon'>
          <FaPeopleGroup />
        </span>
      </div>

      {split && (
        <SplitList
          handleSetPeople={handleSetPeople}
          handleSplitButton={handleSplitButton}
        />
      )}
    </div>
  );
};

export  default Split ;