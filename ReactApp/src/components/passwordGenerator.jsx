import { useState , useCallback } from "react"

function PasswordGenerator(){

    const [length,setLength] = useState(8) // check the lenth of the Password
    const [numberAllowed, setNumberAllowed] = useState(false) // Allows number if true
    const [charAllowed, setCharAllowed] = useState(false) // Allows Special charater if true
    const [password, setPassword] = useState('') // Password

    const generatePassword = useCallback(() => {
        let pass = ""
        let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

        if(numberAllowed) str += '0123456789'
        if(charAllowed) str += '!@#$%^&*()_+'

        for(let i = 0; i<length; i++){
            
        }
    })

    return(
        <>
        <h1>Pasword generator Project</h1>
        <div>
            <input 
            type="text" 
            value={password}
            placeholder="Password"
            readOnly
            />
            <button>Copy</button>
        </div>

        <div className="flex items-center gap-x-2">
            <input 
            type="range"
            min={8}
            max={20} 
            value={length}
            onChange={(e) => setLength(e.target.value)}
            />
            <label htmlFor="length">Length: {length}</label>
        </div>

        <div className="flex items-center gap-x-2">
            <input 
            type="checkbox"
            defaultChecked={numberAllowed} 
            onChange={() => {setNumberAllowed((prev) => !prev)}}
            />
            <label htmlFor="number">Number</label>
        </div>

        <div className="flex items-center gap-x-2">
            <input 
            type="checkbox" 
            defaultChecked={charAllowed}
            onChange={() => {setCharAllowed((prev) => !prev)}}
            />
            <label htmlFor="character">Character</label>
        </div>

        </>
    )
}

export default PasswordGenerator