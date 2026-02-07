import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function React04() {
  const [color, setColor] = useState("white")

  return (
    <>
     <div>
      <h1>Color-Picker</h1>
      <button onClick={()=>setColor("red")}>Red</button>
      <button onClick={()=>setColor("green")}>Green</button>
      <button onClick={()=>setColor("blue")}>Blue</button>

      <div className='bgchange'style={{backgroundColor : color}}></div>
     </div>
       
    </>
  )
}

export default React04
