// This is for creating card component.

// import Card from './Card.jsx'

// function App() {
//   return(
//     <>
//     <Card/>
//     <Card/>
//     <Card/>
//     </>
//   );
  
// }

// export default App



// This is the example for creating a props.

// import Student from "./Student.jsx"

// function App(){
//   return(
//     <>
//     <Student name="Riwaj" age={21} isStudent={true}/>
//     <Student/>
//     </>
    
//   )
// }

// export default App 




// Conditional rendering

import UserGreting from "./UserGreeting";


function App(){
  return(
  <>
  <UserGreting isloggedIn ={true} username="Riwaj"/>

  <UserGreting isloggedIn={true}/>
  </>
  )
  

}

export default App