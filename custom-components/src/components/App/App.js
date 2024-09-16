import React from 'react';
import './App.css';
import Instructions from '../Instructions/Instructions.js';
import InstructionsFunctional from '../Instructions/InstructionsFunctional.js';


const displayEmojiName = event => alert(event.target.id);
const emojis = [
  {
    emoji: '😀',
    name: "test grinning face"
  },
  {
    emoji: '🎉',
    name: "party popper"
  },
  {
    emoji: '💃',
    name: "woman dancing"
  }
];

function App() {
  const greeting = "greeting";
  const displayAction = false;
  return(
    <div className="container">
      <h1 id={greeting}>Hello, World</h1>
      {displayAction && <p>I am writing JSX</p>}
      <Instructions />  {/* this is the custom component. Notice how you implement it like an html element */}
      <InstructionsFunctional /> {/* this is the functional version of Instructions. Instead of changing the original file,
                                        I created a second file.         */}
      <ul>
        {
          emojis.map(emoji => (
            <li key={emoji.name}>
              <button
                onClick={displayEmojiName}
              >
                <span role="img" aria-label={emoji.name} id={emoji.name}>{emoji.emoji}</span>
              </button>
            </li>
          ))
        }
      </ul>
    </div>
  )
}

export default App;
