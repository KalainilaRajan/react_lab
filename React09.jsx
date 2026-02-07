import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function React09() {
  const [theme, setTheme] = useState("light")
  const toggleTheme=()=>{
    setTheme(theme==="light" ? "Dark":"light")

  };
  const containerStyle={
    minHeight:"100vh",
    padding:"20px",
    backgroundColor:theme==="light" ? "#222":"#fff",
    color:theme === "Dark" ? "#030303" : "#fff"

  }

  

  return (
    <> 
    <div style={containerStyle}>
    <h1>Theme Toggle Example</h1>
      <p>Click the button to switch between Light and Dark Mode</p> 
      <button onClick={(toggleTheme)=>setTheme("Black")}
      >Switch to {theme==="light" ? "light" : "Dark" } Mode</button> 
      <div style={{marginTop:"20px"}}></div>
      <p>Text color also changes according to the seleted theme</p> 
    </div>
    
      
      

      </>
  )
}

export default React09
