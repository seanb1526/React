import React from 'react';
import './App.css';

// we can declare functions outside of the component if they do not rely on anything related to the component.
// in this case, it only needs input and output
const displayEmojiName = event => alert(event.target.id);


// declare an array of emoji 'objects'
const emojis = [
  {
    emoji: "😀",
    name: "grinning face"
  },
  {
    emoji: "🎉",
    name: "party popper"
  },
  {
    emoji: "💃",
    name: "woman dancing"
  }
];

function App() {
  const displayLock = true; // used to toggle the <p> tag example of short-circuiting
  const greeting = "greeting";
  return (
    <div className="container">
      <h1 id={greeting}>Hello, World</h1>
      <p>I am writing JSX</p>
      {displayLock && <p>This content can be locked.</p>}

      <ul>
        {/* <li>        **This code is another way to declare all the elements, the uncommented is a faster way to loop-create if they are similar items
          <button
            onClick={displayEmojiName}
          >
            <span role="img" aria-label="grinning face" id="grinning face">😀</span>
          </button>
        </li>
        <li>
          <button
            onClick={displayEmojiName}
          >
            <span role="img" aria-label="party popper" id="party popper">🎉</span>
          </button>
        </li>
        <li>
          <button
            onClick={event => alert(event.target.id)} // you can also write the function inside the onClick attribute
          >
            <span role="img" aria-label="woman dancing" id="woman dancing">💃</span>
          </button>
        </li> */}

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
