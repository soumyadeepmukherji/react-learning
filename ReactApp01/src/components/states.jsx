import { useEffect, useState } from "react"

function States(){

    const[number, setNumber] = useState(0) // number State
    const[str, setStr] = useState(" ") // String
    const[isOpen, setIsOpen] = useState(true) // Boolean
    const[arr, setArr] = useState([]) // Array
    const[user, setUser] = useState({
        name : "Aline",
        age : 26,
    })                              // Object

    // console.log(user.age = 36) // This is illegal in React direclty modifiying State

    useEffect(() => {
        setUser({
            ...user,
            age : 55
        })
    },[])
    console.log(user)
    


    

    return (
        <>
        <h1>States</h1>
        <button onClick={() => {
            setNumber(number => number + 1) 
            setNumber(number => number + 1) }}>Click</button>
        </>
    )
}

export default States