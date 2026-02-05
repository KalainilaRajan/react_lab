import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [activeTab, setactiveTab] = useState("Home")

  return (
    <>
    <div style={StyleSheet.Container}>
      <h2>Tab Component</h2>
      <div style={Styles.tabContainer}>
        <button style={activeTab==="Home" ? Styles.activeBtn: Styles.Btn}onClick={()=>setactiveTab("Home")}>Home</button>
        <button style={activeTab==="About" ? Styles.activeBtn: Styles.Btn}onClick={()=>setactiveTab("About")}>About</button>
        <button style={activeTab==="Content" ? Styles.activeBtn: Styles.Btn}onClick={()=>setactiveTab("Content")}>Content</button>
        
      </div>

      <div style={Styles.contentBox}>
        {activeTab ==="Home" &&(
          <p>This is home page</p>
        )}

        {activeTab==="About" &&(
          <p>This is about page</p>
        )}

        {activeTab==="Content" &&(
          <p>This is Content page </p>
        )}
      </div>

    </div>
      
    </>
  )
}

const Styles={
  Container:{
    minHeight:"100vh",
    backgroundColor:"lightblue"
  },

  tabContainer:{
    padding:"20px"
  },

  contentBox:{
    height:"100px",
    width :"300px",
    border :"1px Solid",
    borderRadius:"10px",
    marginLeft:"59px"
  }
}

export default App
