import { useState,useContext } from 'react'
 import Login from './Login'
 import Profile from './Profile'
 import UserContextProvider from './context/UserContextProvider'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    
      <UserContextProvider>
      <h1>LOGIN YOUR PROFILE</h1>
      <Login />
      <Profile />
    </UserContextProvider>

    
  )
}

export default App
