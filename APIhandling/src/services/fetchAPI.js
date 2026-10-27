import { BASE_API } from "./apiConfig"

// GET METHOD
export const getUser = async() => {
    const response = await fetch(BASE_API);
    if(!response.ok){
        throw new Error("Failed to fetch users")
    }
    return response.json()
}

// POST METHOD
export const createUser = async(user) => {
    const response = await fetch(BASE_API , {
        method: "POST",
        headers: {"content-type":"application/json"},
        body: JSON.stringify(user)
    })
    if(!response.ok){
        throw new Error("Failed to Create users")
    }
    return response.json()
}

// DELETE METHOD
export const deletUser = async(id) => {
    const response = await fetch(`${BASE_API}/${id}`,{
        method: "DELETE"
    })
    if(!response.ok){
        throw new Error("Failed to delete user")
    }
    return true
}