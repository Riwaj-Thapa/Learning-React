// //rendering lists

// import List from './List.jsx'

// function App(){

//   const fruits = [{id:1, name:"apple", calories: 95},
//                   {id:2, name:"orange", calories: 45},
//                   {id:3, name:"banana", calories: 105},
//                   {id:4, name:"litchi", calories: 45},
//                   {id:5, name:"grapes", calories: 15}];

//   const vegetable = [{id:6, name:"potatoes", calories: 45},
//                     {id:7, name:"celery", calories: 45},
//                     {id:8, name:"carrot", calories: 105},
//                     {id:9, name:"corn", calories: 45},
//                     {id:10, name:"borocoli", calories: 15}];

//   return(<>
//           {fruits.length > 0 && <List items={fruits} category="Fruits"/>}
//           {/* {fruits.length > 0 ? <List items={fruits} category="Fruits"/> : null} */}
          
//           {vegetable.length > 0 && <List items={vegetable} category="Vegetable"/>}

//           {/* {vegetable.length > 0 ? <List items={vegetable} category="Vegetable"/> : null } */}
//           </>);
// }

// export default App 



//Button components

import Button from "./Button"
import ProfilePicture from "./ProfilePicture.jsx"

function App(){
  return(<ProfilePicture/>)
}

export default App


