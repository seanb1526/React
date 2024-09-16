import React from 'react';
import './Instructions.css';
import logo from './INP-Logo.svg'

// You can create the functional component like the code below
/*
export default function InstructionsFunctional() {
  return(
    <div className="instructions">
        <img alt="INP Logo" src={logo} />
        <p>Click on an emoji to view the emoji short name.</p>
    </div>
  )
}
  */

// Or you can also make it an arrow function like the code below

const InstructionsFunctional = () => (
  <div className="instructions">
    <img alt="INP logo" src={logo} />
    <p>Click on an emoji to view the emoji short name.</p>
  </div>
)

export default InstructionsFunctional;

/* The main difference is that with the arrow function, you lose the functional body,
   and you have to assign the function to a variable and then export that variable.
*/