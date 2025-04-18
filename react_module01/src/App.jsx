import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'




function App() {
  const [color, setColor] = useState("lightgrey")

  return (
    <div className='w-full h-screen duration-200'
    style={{backgroundColor:color}}
    > 
      <div className='fixed flex flex-wrap justify-center  bottom-12 inset-x-0 px-2 py-2 '>
       <div className='flex flex-wrap justify-center b bg-white px-3 py-2 rounded-2xl'>
        <button className='outline-none px-4 text-white m-1'
        style={{backgroundColor:"red"}}
        onClick={()=>setColor("red")}
        >Red</button>
        <button className='outline-none px-4 text-white m-1'
        style={{backgroundColor:"lightblue"}}
        onClick={()=>setColor("lightblue")}
        >Blue</button>
        <button className='outlonClick={()=>setColor("red")}ine-none px-4 text-white m-1'
        style={{backgroundColor:"green"}}
        onClick={()=>setColor("green")}
        >Green</button>
       </div>
       
      </div>
      
    </div>
  )
}

export default App
