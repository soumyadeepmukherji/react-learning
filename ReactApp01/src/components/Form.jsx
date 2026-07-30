import { useState } from "react"

function Form(){
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const [male, setMale] = useState('')
    const [female, setFemale] = useState('')
    const [other, setOther] = useState('')

    const [reset, setReset] = useState('')

    const reSet = () =>{
        setName('')
        setEmail('')
        setPassword('')
    }


    return(
        <>
            {/* <form action="" method="get"> */}
                <label htmlFor="username">Name</label>
                <input type="text" value={name} id="username" onChange={(e) => setName(e.target.value)} />

                <label htmlFor="email">Email Id</label>
                <input type="email" value={email} id="email" onChange={(e) => setEmail(e.target.value)} />

                <label htmlFor="password">Password</label>
                <input type="password" value={password} id="password" onChange={(e) => setPassword(e.target.value)} />

                <fieldset>
                    <legend>Gender</legend>
                    <input type="checkbox" id="male"  /><label htmlFor="male">Male</label>
                    <input type="checkbox" id="female"  /><label htmlFor="female">Female</label>
                    <input type="checkbox" id="others"  /><label htmlFor="others">Others</label>
                </fieldset>

                <button className='counter' onClick={() => reSet()}>Reset</button>
            {/* </form> */}

            <ul className="display">
                <li>Name:{name}</li>
                <li>Email:{email}</li>
                <li>Password:{password}</li>
            </ul>
        </>
    )
}

export default Form