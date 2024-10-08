import React from "react";
import Footer from "./Components/Footer.jsx"
import Profile from "./Components/Profile.jsx"
import Contact from "./Components/Contact.jsx";
import UseReducer from "./UseReducer/UseReducer.jsx";
import Example from "./UseLayoutEffect/Example.jsx";
import UselocalStorage from "./CustomHooks/UselocalStorage.jsx";


function App(){

  const [name, setName] = UselocalStorage('username','')

  const [id, setId] = UselocalStorage('userid','')  



  return(
    <>
     <input type="text" placeholder="Enter your name" value={name}
     onChange={(e)=>setName(e.target.value)}/>
    <h2>Hello, {name}</h2>
    <input type="text" placeholder="Enter your id " value={id}
     onChange={(e)=>setId(e.target.value)}/>
    <h2>Your id: {id}</h2>
    </>
    
  )
}
  
export default App