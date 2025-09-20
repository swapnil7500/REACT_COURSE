import React from "react";
import UserContext from "./UserContext";
// hmne jo context banaya tha usko import kr liya taaki react se provider ka access le sake 
//  ab ahm provider ka functioon banaenge 
 const UserContextProvider = ({children}) => {
    const [user, setUser] = React.useState(null) // hmne kuchh difine nhi kiy tha to bas children de diya bs  isse hm kitne bhi components bana kr access le skte hai  aur har component ki valu ko chnage krne ke lie use state hook laga diya//
    return(
        // // kai tarike hai provider lagane ke .provider bhi ek hai //
        <UserContext.Provider value={{user, setUser}}> 
        {children}
        </UserContext.Provider>
    )
 }
export default UserContextProvider

