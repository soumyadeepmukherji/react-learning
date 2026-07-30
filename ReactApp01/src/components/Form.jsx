import { useState } from "react"

function Form(){
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const [gender, setGender] = useState('')

    const [skill, setSkill] = useState([])

    const handelChange = (e) => {
        console.log(e.target.value, e.target.checked)

        if(e.target.checked){
            setSkill([...skill,e.target.value])
        }
        else{
            setSkill([...skill.filter((item) => item != e.target.value)])
        }
    }

    const [State, setState] = useState('')

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
                    <legend htmlFor="gender">Gender</legend>
                    <input type="radio" id="male" name="gender" onClick={(e) => setGender(e.target.value)} value={'male'} /><label htmlFor="male">Male</label>
                    <input type="radio" id="female" name="gender" onClick={(e) => setGender(e.target.value)} value={'female'} /><label htmlFor="female">Female</label>
                    <input type="radio" id="others" name="gender" onClick={(e) => setGender(e.target.value)} value={'others'} /><label htmlFor="others">Others</label>
                </fieldset>

                <fieldset>
                    <legend>Skills</legend>
                    <input type="checkbox" id="javascript" onChange={handelChange} value="javascript" /><label htmlFor="javascript">Javascript</label>
                    <input type="checkbox" id="python" onChange={handelChange} value="python" /><label htmlFor="python">Python</label>
                    <input type="checkbox" id="react" onChange={handelChange} value="react" /><label htmlFor="react">React</label>
                </fieldset>

                <select onChange={(e) => setState(e.target.value)}>
                    <option value="" defaultChecked unselectable="">Select State</option>
                    <option value="karnataka">Karnataka</option>
                    <option value="WestBengal">WestBengal</option>
                    <option value="Maharasthra">Maharasthra</option>
                </select>

                <button className='counter' onClick={() => reSet()}>Reset</button>
            {/* </form> */}

            <ul className="display">
                <li>Name:{name}</li>
                <li>Email:{email}</li>
                <li>Password:{password}</li>
                <li>Gender:{gender}</li>
                <li>Skills:{skill}</li>
                <li>Location:{State}</li>
            </ul>
        </>
    )
}

export default Form