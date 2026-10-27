import { useEffect, useRef, useState } from "react";
import { createUser } from "../services/fetchAPI";

function UncontrollForm(){
    const nameRef = useRef()
    const emailRef = useRef()
    const phoneRef = useRef()


    const handelSubmit = (event) => {
        event.preventDefault()
        const user = {
        name: nameRef.current.value,
        email: emailRef.current.value,
        phone: phoneRef.current.value
        }

        createUser(user)
    }



    return(
        <form onSubmit={handelSubmit} className="formwrap">
            <h2>Uncontroll Form</h2>
            <input 
            ref={nameRef}
            type="text" 
            placeholder="Name"
            />

            <input
            ref={emailRef}
            type="email"
            placeholder="Email ID" 
            />

            <input 
            type="tel" 
            ref={phoneRef}
            placeholder="Phone"
            />

            <button type="submit">
                Submit
            </button>
        </form>
    )
}

export default UncontrollForm;