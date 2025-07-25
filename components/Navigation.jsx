import React from 'react'

import { AiOutlineBars } from "react-icons/ai";

const Navigation = () => {
  return (
    <div className='Navigation'>
        <div className='Logo'>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3WbLEzwRrRgOKp_9pXBCW3u7R_TYCH4iflg&s" alt="Logo" />
        <h1>Expense Tracker</h1>
        </div>
        <div className='Links'>
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
        </div>
       
        <AiOutlineBars size={'1.5rem'}/>
    </div>
  )
}

export default Navigation