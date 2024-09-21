// import React,{useState, useEffect} from "react";

// function MyComponent(){

//     const [width, setWidth] = useState(window.innerWidth);
//     const [height, setHeight] = useState(window.innerHeight);

//     useEffect(()=>{
//         window.addEventListener("resize", handleResize);
//         console.log("Event listener added.")

//         return()=>{
//             window.removeEventListener("resize", handleResize);
//             console.log("Event listener removed.")
//         }
//     },[]);

//     useEffect(()=>{
//         document.title = `Size: ${width} X ${height}`;
//     },[width,height])

//     function handleResize(){
//         setWidth(window.innerWidth);
//         setHeight(window.innerHeight);
//     }

//     return(<>
//         <p>Windows Width: {width}px</p>
//         <p>Windows Height: {height}px</p>
//         </>
//     )

// }

// export default MyComponent


// // use ref() hook 
// import React, {useState, useEffect, useRef} from "react"

// function MyComponent(){
//     const inputRef1 = useRef(null)
//     const inputRef2 = useRef(null);
//     const inputRef3 = useRef(null);

//     useEffect(()=>{
//         console.log("Component rendering")
//     })

//     function handleClick1(){
//         inputRef1.current.focus();
//         inputRef1.current.style.backgroundColor = "yellow";
//         inputRef2.current.style.backgroundColor = "";
//         inputRef3.current.style.backgroundColor = "";
//     }

//     function handleClick2(){
//         inputRef2.current.focus();
//         inputRef1.current.style.backgroundColor = "";
//         inputRef2.current.style.backgroundColor = "yellow";
//         inputRef3.current.style.backgroundColor = "";
//     }

//     function handleClick3(){
//         inputRef3.current.focus();
//         inputRef1.current.style.backgroundColor = "";
//         inputRef2.current.style.backgroundColor = "";
//         inputRef3.current.style.backgroundColor = "yellow";
//     }

//     return(
//     <div>
//         <button onClick={handleClick1}>
//             Click Me!
//         </button>
//         <input ref={inputRef1} />
//         <br></br>

//         <button onClick={handleClick2}>
//             Click Me!
//         </button>
//         <input ref={inputRef2} />
//         <br></br>

//         <button onClick={handleClick3}>
//             Click Me!
//         </button>
//         <input ref={inputRef3} />
//     </div>
//     )

// }

// export default MyComponent



