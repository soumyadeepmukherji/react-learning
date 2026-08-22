import { useState } from 'react'
import './App.css'
import UserContextProvider from './context/UserContextProvider'
import Login from './components/login'

function App() {

  return (
    <>
      <h1>React Context API</h1>
      <UserContextProvider>
          <Login />
      </UserContextProvider>
    </>
  )
}

export default App
