import { useEffect, useState } from 'react'
import './App.css'
import { deletUser, getUser } from './services/fetchAPI'
import ControllForm from './components/controlledFrom'
import UncontrollForm from './components/uncontrolledForm'

function App() {

  const[loading, setLoading] = useState(true)
  const[users, setUsers] = useState([])
  const[error, setError] = useState("")

  useEffect(() => {
    const loadUser = async() => {
      try{
        setLoading(false)

        const data = await getUser();

        setUsers(data)
      }
      catch(error){
        setError(error.message) 
      }
    }
    loadUser()
  })
  
  const handelDelete = async(id) => {
    const confirm = window.confirm("Are you sure you want to delete")

  if(confirm){
    try{
      await deletUser(id)
    }
    catch{
      setError("Failed to Delete")
    }
  }
  }

  return (
    <section>
    {loading && <p>Loading...</p>}

    {error && <p>{error}</p>}

    <div className='grid'>
      <ControllForm />

      <UncontrollForm />
    </div>



    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>NAME</th>
          <th>EMAIL</th>
          <th>PHONE</th>
          <th colSpan={2}>Action</th>
        </tr>
      </thead>
      <tbody>
        {users.map(user => (
          <tr key={user.id}>
            <td>{user.id}</td>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>{user.phone}</td>
            <td>
              <button onClick={() => handelDelete(user.id)} className='danger'>Delete</button>
              <button onClick={() => handelDelete(user.id)} className='edit'>Edit</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
    </section>
  )
}

export default App
