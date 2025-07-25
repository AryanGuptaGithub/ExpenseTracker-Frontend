import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { IoPerson } from "react-icons/io5";

import { FaPeopleGroup } from "react-icons/fa6";
import ManualMemberAddForm from './ManualMemberAddForm';

const SplitList = ({handleSplitButton, handleSetPeople}) => {
    const [ManualFormVisibility, setManualFormVisibility] = useState(false);
    const [addMoreMemberButton, setAddMoreMemberButton] = useState(false);
     const [MemberSelected, setMemberSelected] = useState(0);

    const handleManualForm = () => {
        setManualFormVisibility(!ManualFormVisibility);
        // this function hides and reverls the manual member add form 
    }

    const addMoreButton = () => {
        setAddMoreMemberButton(!addMoreMemberButton);   
        // this function has the control of add more member button 
    }

    useEffect(()=>{
        handleSetPeople(MemberSelected);
    },[MemberSelected]);



      const handleMemberSelected = (e) => {
        
        setMemberSelected(Number( e.currentTarget.id ) );
      };

      // useEffect(()=>{
      //     console.log(MemberSelected);
      // },[MemberSelected]);


  return (
        <div>

            
             { !addMoreMemberButton && <div className='Split-List'>
                <h2>Select Members</h2>
            <div className='Split-List-Container'>
                     
                   <div className='Split-List-Item selector' id='1' onClick={handleMemberSelected}>
                        <h3>1</h3>
                     <span><IoPerson /> </span>
                    </div> 
                    
                    <div className='Split-List-Item selector' id='2' onClick={handleMemberSelected}>
                        <h3>2</h3>
                      <span><IoPerson /> </span>
                    </div> 

                    <div className='Split-List-Item selector' id='3' onClick={handleMemberSelected}>
                        <h3>3</h3>
                      <span><IoPerson /> </span>
                    </div> 
                    
                    <div className='Split-List-Item selector' id='4' onClick={handleMemberSelected}>
                    <h3>4</h3>
                      <span><IoPerson /> </span>
                    </div> 

                    
                   <div className='Split-List-Item selector' id='5' onClick={handleMemberSelected}>
                   <h3>5</h3>
                      <span><IoPerson /> </span>
                    </div> 
                    
                    <div className='Split-List-Item selector' id='6' onClick={handleMemberSelected}>
                   <h3>6</h3>
                      <span><IoPerson /> </span>
                    </div> 

                    <div className='Split-List-Item selector' id='7' onClick={handleMemberSelected}>
                    <h3>7</h3>
                      <span><IoPerson /> </span>
                    </div> 
                    
                    <div className='Split-List-Item selector' id='8' onClick={handleMemberSelected}>
                   <h3>8</h3>
                      <span><IoPerson /> </span>
                    </div> 

                     <div className='Split-List-Item selector' id='9' onClick={handleMemberSelected}>
                    <h3>9</h3>
                      <span><IoPerson /> </span>
                    </div> 

                    <div className='Split-List-Item selector' style={{display:'flex', flexDirection:'row', justifyContent:'center', alignItems:'center', gap:'10px'}} onClick={addMoreButton}>
                    <p style={{color:'#ed5729'}}>... Add More</p>
                   <span><IoPerson /> </span>
                    </div> 
            </div>   

                    </div> }       

      {  addMoreMemberButton && <ManualMemberAddForm handleSetPeople={handleSetPeople} handleManualForm={handleManualForm} handleSplitButton={handleSplitButton} addMoreButton={addMoreButton} />}   
       




        </div>
  )
}

export default SplitList