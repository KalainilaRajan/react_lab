import {useState} from "react";
function React01(){
    const[count, setCount]=useState(0);

    let incre=()=>{
        setCount(count+1)
    }
    let decre=()=>{
        setCount(count-1)
    }
    let reset=()=>{
        setCount(0)
    }
    return(
        <div>
        <h2>Counter-app</h2>
        <p>{count}</p>
            <button onClick={incre}>Increment</button>
            <button onClick={decre}>Decrement</button>
            <button onClick={reset}>Reset</button>
        </div>
    )
}
export default React01;