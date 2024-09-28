import { useState } from "react";

function Car(){

    const [car, setCar] = useState({

        brand:"Ferrari",
        model:"Roma",
        year:"2023",
        color:"Red"
      });
    
      const changeColor=()=>{
        setCar((c)=>{
          return{...c, color:"blue"}
        })
      }
      return(
        <>
          <h2>My {car.brand}</h2>
          <h2>It is a {car.color} {car.model} from {car.year} </h2>
          <button onClick={changeColor}>
            color change
    
          </button>
    
        </>
      )


}

export default Car