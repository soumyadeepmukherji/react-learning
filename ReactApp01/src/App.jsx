import { useState } from 'react'
import './App.css'
import User from './components/User'
import List from './components/list'
import Form from './components/Form'
import Life from './components/classBaseLifeCycle'

function App() {
  const [count, setCount] = useState(0)
  const [input, setInput] = useState('')

  const sports = ["Cricket","Football","Basketball","Batminten","Chess"]

  const userData = [
    {
      id: 101,
      name: 'Srikanth',
      age: 23,
    },
    {
      id: 102,
      name: 'Swati',
      age: 21,
    },
    {
      id: 103,
      name: 'Rahul',
      age: 28,
    },
    {
      id: 104,
      name: 'Kunal',
      age: 20,
    }
  ]

  // console.log(userData)

  return (
    <>
        <h1>Mulyiple Conditions</h1>
        <span>{count}</span>
        <button onClick={() => setCount(count + 1)} className='counter'>button</button>
        {
          count == 0 ? <h2>Condition 1</h2>
          : count == 1 ? <h3>Condition 2</h3>
          : count == 2 ? <h4>Condition 3</h4>
          : count == 3 ? <h5>Condition 4</h5>
          : count == 4 ? <h6>Condition 5</h6>
          : null
        }

        <section>
          <User name = {"Srikanth"} loc = {"Benglore"} />

          <List list={sports}/>
        </section>

        <h3>Get Output: {input}</h3>
        <input type="text" placeholder='Type here...' onChange={(e) => setInput(e.target.value)} />

        <section>
          <Form />
        </section>

        <section>
          <table>
            <thead>
              <tr>
              <th>ID</th>
              <th>NAME</th>
              <th>AGE</th>
              </tr>
            </thead>
            <tbody>
              {userData.map((data,index) => (
                <tr key={index}>
                  <td>{data.id}</td>
                  <td>{data.name}</td>
                  <td>{data.age}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>

        <section>
          <Life />
        </section>
    </>
  )
}

export default App
