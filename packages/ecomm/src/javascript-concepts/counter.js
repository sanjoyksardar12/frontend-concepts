import { useState } from 'react';
const source = "https://www.greatfrontend.com/questions/user-interface/counter";


const desc = `Note: This is a short warm up question meant to help you familiarize with the coding workspace. Actual UI coding interview questions will be more complicated.

Requirements
Make the text within the button display the number of times the button has been clicked.

`;




// This is a warm up question to help you
// get familiar with the editor.
// Most of the code has been filled in for you.
export default function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <button
        onClick={() => {
          // Fix the bug in the next line
          // to complete the question.
          setCount(count + 1);
        }}>
        Number of Times: {count}
      </button>
    </div>
  );
}

