import { useState } from "react"
import UserContext from "./UserContext"


const UserContextProvider = ({Children}) => {
    const[user,setUser] = useState(null)
    console.log(user)
    return(
        <UserContext.Provider value={{user,setUser}}>
            {Children}
        </UserContext.Provider>
    )
}

export default UserContextProvider