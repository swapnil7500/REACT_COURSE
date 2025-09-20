 import React, {useState, useContext} from 'react' 
import UserContext from './context/UserContext'
//   ye file me data fill krne and update karne ka ui hai bas 
// isko ek coponent(children ki trah use karna hai so,use context me liye hai ki isi set user naam ke variable kok acess dena hai)

 function Login() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const {setUser} = useContext(UserContext)
    const handleSubmit = (e) => {
        e.preventDefault()
        setUser({username, password})
    }
  return (
    <div>
        <h2>Login</h2>
        <input type='text'
        value={username}
        onChange={(e) => setUsername(e.target.value) }
        placeholder='username'  />
        {" "}
        <input type='text' 
        value={password}
        onChange={(e) => setPassword(e.target.value) }
        placeholder='password'  />
        <button onClick={handleSubmit}>Submit</button>
    </div>
  )
 }
 export default Login