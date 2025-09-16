import { useState } from 'react'
import './App.css'

function App() {
  const [color, setColor] = useState("pink")

const Blue = function() {
  setColor("blue");
}
const Green = function() {
  setColor("green");
}
const Black  = function() {
  setColor("black");
}
 return (
  <>
  <h1 className='bg-amber-950 text-amber-100 m-1 p-1 border-amber-600 rounded-3xl'>WELCOME TO MY BG_CHANGER</h1>
 <div className="w-full h-screen duration-200" style={{backgroundColor: color}}>
 <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
 <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2
 rounded-3xl">
  <button onClick={Blue} className='text-amber-100 ' style={{backgroundColor:"blue"}}>Blue</button>
  <button on onClick={Green} className='text-amber-100 ' style={{backgroundColor:"green"}}>Green</button>
  <button onClick={Black} className='text-amber-100 ' style={{backgroundColor:"black"}}>Black</button>
  {/* we can also make a btn and add hooks like that */}
  <button onClick={() => setColor("yellow")} className='brown' style={{backgroundColor:"yellow"}}>Yellow</button>

 </div>
 </div>
 </div>

 </>
 )

}

export default App
