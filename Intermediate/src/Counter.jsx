import { useState } from "react"

function Counter(){

    const [number, setNumber] = useState(0);

    const defaultValue = () =>{
        setNumber(0);
    }

    const addition = () =>{
        setNumber(number+1)
    };

    const substraction = () =>{
        setNumber(number-1)
    };

    return(<>
            <div className="counter-container">
                <p className="count-display">
                    {number}
                </p>
                <button className="counter-button" onClick={addition}>
                    Add +1
                </button>              
                <button className="counter-button" onClick={substraction}>
                    Sub -1
                </button>
                <button className="counter-button" onClick={defaultValue}>
                    Default
                </button>
            </div>
            </>)




}

export default Counter