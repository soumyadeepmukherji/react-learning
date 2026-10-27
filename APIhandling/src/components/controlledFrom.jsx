import { useState } from "react";
import { createUser } from "../services/fetchAPI";

function ControllForm() {
    const[name, setName] = useState('')
    const[email, setEmail] = useState('')
    const[phone, setPhone] = useState(0)

    const[editId, setEditId] = useState(null)

    const handelSubmit = (event) =>{
        event.preventDefault()
        const payload = {
            name: name,
            email: email,
            phone: phone
        }
        createUser(payload)
        
    }

    return(
        <>
        <form onSubmit={handelSubmit} className="formwrap">
            <h2>Controll Form</h2>
            <input 
                type="text" 
                value={name}
                onChange={(event) => setName(event.target.value)}
                placeholder="Name" 
            />

            <input 
                type="email" 
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                placeholder="Email" 
            />

            <input 
                type="tel" 
                value={phone}
                onChange={(event) => setPhone(event.target.value)}
                placeholder="Phone" 
            />

            <button type="submit">
                Submit
            </button>
        </form>
        </>
    )
}

export default ControllForm;