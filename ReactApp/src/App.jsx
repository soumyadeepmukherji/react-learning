import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Card from './components/card'
import PasswordGenerator from './components/passwordGenerator'

function App() {
  // State
  const [count, setCount] = useState(0) // value is count and methods is setCount
  const [colour, setColour] = useState('blue')

  const bgchange = (colour) => {
    setColour(colour)
  }

  const randomBg = () => {
    let r = Math.floor(Math.random() * 256)
    let g = Math.floor(Math.random() * 256)
    let b = Math.floor(Math.random() * 256)

    const randomColour = `rgb(${r},${g},${b})`

    setColour(randomColour)
  }

  const increment = () => {
    setCount(count + 1)
  }

  return (
    <>
      <h1>React with Vite</h1>
      <button onClick={increment}>Click {count}</button>
      
      <section className='my-4'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
          <Card 
          img = 'https://imgs.search.brave.com/wrivnr19eUG3w_p3VKe3883HDkwJrYANWABOoa8PHQE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy90/aHVtYi80LzQyL0Zv/b3RiYWxsX2luX0Js/b29taW5ndG9uJTJD/X0luZGlhbmElMkNf/MTk5NS5qcGcvNTEy/cHgtRm9vdGJhbGxf/aW5fQmxvb21pbmd0/b24lMkNfSW5kaWFu/YSUyQ18xOTk1Lmpw/Zw'
          />
          <Card 
          img = 'https://imgs.search.brave.com/EgT_Fc8szwgHJfn_MrZOwSAOUZwCWsTHt1tb5Kv2oDU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy90/aHVtYi83LzdhL1Bv/bGxvY2tfdG9fSHVz/c2V5LmpwZy81MTJw/eC1Qb2xsb2NrX3Rv/X0h1c3NleS5qcGc'
          title='circket'
          />
          <Card 
          img='https://imgs.search.brave.com/6kakwqfPj5Nd6BkWp42JdWRExv6v5qntWGDbTiEOz70/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy90/aHVtYi8wLzA2L1N0/ZXBoX0N1cnJ5XyUy/ODUxOTE1MTE2OTU3/JTI5LmpwZy81MTJw/eC1TdGVwaF9DdXJy/eV8lMjg1MTkxNTEx/Njk1NyUyOS5qcGc'
          title='basketball'
          />
          <Card />
        </div>
      </section>

      <section className='my-4 w-100% h-52 flex items-center justify-center' style={{backgroundColor: colour}}>
            <div className='grid grid-cols-3 gap-4 w-80'>
              <button className='p-4 bg-white rounded-full text-black' onClick={() => bgchange('red')}>Red</button>
              <button className='p-4 bg-white rounded-full text-black' onClick={() => bgchange('green')}>Green</button>
              <button className='p-4 bg-white rounded-full text-black' onClick={() => randomBg()}>Random</button>
            </div>
      </section>

      <PasswordGenerator />
    </>
  )
}

export default App
