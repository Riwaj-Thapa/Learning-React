import { useState } from "react";

function Count(){

    const [count, setCount] = useState(0);

    const increaseCount = ()=>{
        setCount(c=>c+1)
        setCount(c=>c+1)
        setCount(c=>c+1)
        setCount(c=>c+1)

        console.log(count)
    }


    return(
    <>
    <h1>
        Count:{count}
    </h1>
    <button onClick={increaseCount}>Increase
    </button>

    </>
    );
}


export default Count