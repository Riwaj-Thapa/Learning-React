function Button(){

    const handleClick = (event)=>{
        event.target.textContent = "Ouch 😒";
    }



    // return(
    //     <button onClick={(e)=>handleClick(e)}>Click me ❤</button>
    // )

    return(
        <button onDoubleClick={(e)=>handleClick(e)}>Click me ❤</button>
    )

}

export default Button