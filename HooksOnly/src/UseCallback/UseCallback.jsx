import React, { useCallback, useState } from "react";
import Header from "../Components/Header";

function UseCallBack(){

    const [count,setCount] = useState(0)
    // On changing the dependency the function will re-redered.
    const newFn = useCallback((count)=>{},[count])

    return(
        <>
        <Header newFn={newFn}/>
        <h1>{count}</h1>
        <button onClick={()=>{
            setCount(prev=>prev+1)
        }}>Click here</button>
        
        </>
    );


}

export default UseCallBack