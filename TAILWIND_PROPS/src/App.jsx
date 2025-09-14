import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import card from './components/card'

function App() {
  const [count, setCount] = useState(0)
  let myobj ={
    mymname: "swapnil",prize:23000
  }

  return (
    <>
      <h2 className='bg-amber-700 text-amber-100 border-2  m-1 p-1 rounded-xl w-2xl'>NEW PROPS WORK </h2>
      <card mymname="code" />
      <card />

</>
  )
}

export default App
