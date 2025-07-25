import React, { useState, useEffect } from 'react';
import { IoPerson } from "react-icons/io5";
import SplitingIn from './SplitingIn';

const ManualMemberAddForm = ({handleManualForm, addMoreButton, handleSplitButton, handleSetPeople}) => {
  const [selectedMembers, setSelectedMembers] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

  handleSetPeople(e.target[0].value);
  
    handleManualForm(); 
    handleSplitButton();
  };

    //


  // useEffect(() => {
  //   console.log("Updated selectedMembers:", selectedMembers);
  // }, [selectedMembers]);

    

  return (
    <div className='Add-Member-Manually'>
      <div className='members-form-headings'>
        <h2>Add Members</h2>
        <IoPerson color='#ed5729' size='24px' />
      </div>

      <form className='Add-Members-Form' onSubmit={handleSubmit}>
        <input
          type='number'
          placeholder='Ex: 10, 11, 12...'
          value={selectedMembers}
          onChange={(e) => setSelectedMembers(e.target.value)}
          required
        />

        <div style={{ display: 'flex', justifyContent: 'space-between' }} className='Button-Container'>
          <button
            type='button'
            style={{ backgroundColor: '#fa3c3c' }}
            onClick={addMoreButton}
          >
            Cancel
          </button>
          <button type='submit' >Add Member</button>
        </div>
      </form>
    </div>
  );
};

export default ManualMemberAddForm;
