import React, {useContext} from 'react' 
import UserContext from './context/UserContext'
 function Profile() {
    // ye profile me show karane ke liye hai 
    const {user} = useContext(UserContext)  // ye line jarroori hi ye is file ko  in provider  as children banati hai
    if (!user) return <div>please login</div>
    return <div>Welcome {user.username}</div>
 }
 export default Profile