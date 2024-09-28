import { useRef } from "react"

function InputFeild(){

    const inputElement = useRef();

    const onClickBtn=()=>{
        console.log(inputElement.current)
        inputElement.current.style.background = "blue";
    }
    return(
    <>
    <input type="text" ref={inputElement}></input>
    <button onClick={onClickBtn}>Click here</button>
    </>)
}

export default InputFeild