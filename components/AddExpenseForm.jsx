import React, { useState } from 'react';


const AddExpenseForm = ({ expenses, onFormClose }) => {
    const [formData, setFormData] = useState({
        description: '',
     
        amount: '',
     
    });

    const handleInput = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleFormSubmit = async (e) => {
        e.preventDefault();

        const dataToSend = { ...formData };

       
        if (!dataToSend.description || !dataToSend.amount ) {
            alert('Please fill in all fields.');
            return;
        }

        if (dataToSend.amount) {
            dataToSend.amount = parseFloat(dataToSend.amount);
            if (isNaN(dataToSend.amount) || dataToSend.amount <= 0) {
                alert('Please enter a valid positive number for Amount.');
                return;
            }
        }

        try {
            const response = await fetch(`${import.meta.env.VITE_BACKEND_BASE_URL}/api/expenses`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(dataToSend)
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.message || `HTTP error! status: ${response.status}`);
            }

            // const result = await response.json();
            // // console.log('Expense added successfully:', result);

           
            setFormData({
                description: '',
              
                amount: '',
               
            });

            if (expenses && typeof expenses === 'function') {
                expenses();
            }

           
            if (onFormClose && typeof onFormClose === 'function') {
                onFormClose();
            }

        } catch (error) {
            console.error('Error adding expense:', error.message);
            alert(`Failed to add expense: ${error.message}. Please try again.`);
        }
    };

    const handleKeyDown = () => {
       
        if (event.key === 'Enter') {
            event.preventDefault();
            handleFormSubmit(event);
        }
    }

    return (
      <div className='grid-center-container'>
        <div className="add-expense-form-content">
            <form onSubmit={handleFormSubmit} onKeyDown={handleKeyDown} >
                    <div className='crossButton' onClick={onFormClose}>
                    <button className='Button '>❌</button>
                    </div>
                <h2>Add New Expense</h2> 

               
                <div className="new-expense__controls">
                   
                    <div className="new-expense__control">
                        <label htmlFor="description">Description</label>
                        <input
                            type='text'
                            id="description" 
                            onChange={handleInput}
                            placeholder='e.g., Groceries, Rent' 
                            name='description'
                            value={formData.description}
                            required
                        />
                    </div>

                

                    {/* Individual control group for Amount */}
                    <div className="new-expense__control">
                        <label htmlFor="amount">Amount</label>
                        <input
                            type='number'
                            id="amount"
                            onChange={handleInput}
                            placeholder='e.g., 50.00'
                            name='amount'
                            value={formData.amount}
                            step='0.01'
                            min='0'
                            required
                        />
                    </div>

                   
                   
                </div>

             
                <div className="new-expense__actions" >
                  
                    <button type='submit'>Add Expense</button>
                </div>
            </form>
        </div>
      </div>
    );
};

export default AddExpenseForm;