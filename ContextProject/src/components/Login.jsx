import { useContext, useState } from "react"
import UserContextProvider from "../context/UserContextProvider"
import UserContext from "../context/UserContext"

const Login = () =>{
    const[userName, setUserName] = useState('')
    const[password, setPassword] = useState('')

    const {setUser} = useContext(UserContext)

    function handelSubmit(e){
        e.preventDefault()
        setUser({userName,password})
    }
    return(
        <div>
        <h1>Login</h1>
        <input 
        type="text"
        value={userName}
        onChange={(e) => setUserName(e.target.value)} />

        <input 
        type="text"
        value={password}
        onChange={(e) => setPassword(e.target.value)} />

        <button onClick={handelSubmit()}>Submit</button>
        </div>
    )
}
export default Login