import { useState } from 'react'
import './App.css'
import User from './components/User'
import List from './components/list'
import Form from './components/Form'

function App() {
  const [count, setCount] = useState(0)
  const [input, setInput] = useState('')

  const sports = ["Cricket","Football","Basketball","Batminten","Chess"]

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
    </>
  )
}

export default App
