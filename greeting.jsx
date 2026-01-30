import React, { useEffect, useState } from "react";

function Greeting(){
    
        
        const [greetings,setGreeting]=useState("") // Storing purpose
        useEffect(()=>{

            let hours=new Date().getHours().toString().padStart(2,"0")
            let min=new Date().getMinutes().toString().padStart(2,"0")
            let sec=new Date().getSeconds().toString().padStart(2,"0")
            if(hours<12){
                setGreeting(`Good Morning ${hours}:${min}:${sec}`)

            }
            else if(hours>=12  &&   hours<=15){
                setGreeting(`Good AfterNoon ${hours}:${min}:${sec}`)

            }

            else if(hours>=17  && hours<=18){
                setGreeting(`Good Evening ${hours}: ${min}:${sec}`)
            } 
            
            else{
                setGreeting(`Good Night ${hours}:${min}:${sec}`)
            }
        })



        return(
        <div>
            <div style={{
                height : "100px",
                width: "200px",
                backgroundColor: "pink",
                marginTop:"40px",
                marginLeft:"300px",
                borderTopLeftRadius:"20px",
                borderBottomRightRadius:"20px"}}>{greetings}</div>



        </div>
        
    )
}


export default Greeting