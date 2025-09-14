import { useState } from 'react'
import './App.css'
import Card from './card'
function App() {
  const [count, setCount] = useState(0)
  // let myobj ={
  //   mymname: "swapnil",prize:23000
  // }

  return (
    <>
      <h2 className='bg-amber-700 text-amber-100 border-2  m-1 p-1 rounded-xl w-2xl'>NEW PROPS WORK </h2>
      <Card className="w-64 shadow-lg hover:scale-105 transition-transform duration-300" name="code" prize="45000" />
      <Card className="w-64 shadow-md border border-gray-500" name="swapnil" />

</>
  )
}

export default App
