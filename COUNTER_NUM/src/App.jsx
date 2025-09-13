import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
 
  const [count, setCount] = useState(3);
  
   const addValue= function(){
    if(count>=0&&count<20){
    setCount(count+1)
    }
  };
const   removeValue =function(){
if (count>0) {
  setCount(count-1)
}
}


  return (
    <>
     {/* here we are generaly return the valu to app in html format  */}
      <h1>SWAPNIL'S PROJECT BY REACT  </h1>
      <h2>COUNT {count}</h2>
      <div className="card">
        <div>
        <button onClick={addValue}>
         increase {count}
        </button>
        </div>
        <div>
        <button onClick={removeValue}>decrease{count}</button>
        </div>
        <p>
          {/* Edit <code>src/App.jsx</code> and save to test HMR */}
        </p>
      </div>
      {/* <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
    </>
  )
}

export default App
