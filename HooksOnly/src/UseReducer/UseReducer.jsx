import React, { useReducer, useState } from 'react'


function UseReducer() {

  const intialState = {count:0}

  const reducer = (state, action) =>{

    switch(action.type){
        case 'increase' : {
            return {count:state.count + 1}
        }
        case 'decrease':{
            return {count:state.count - 1}
        }
        case 'input':{
            return {count:action.payload}
        }

        default : {
            return state
        }
    }

    

  }

  const [state, dispatch] = useReducer(reducer, intialState)

  return (
    <div>
        <h1>{state.count}</h1>
        <button onClick={()=>dispatch({type:'increase'})}>+</button>
        <br></br>
        <button onClick={()=>dispatch({type:'decrease'})}>-</button>
        <br></br>
        <input value={state.count} onChange={(e)=>dispatch({type:'input',payload:Number(e.target.value)})} type='number'/>
    </div>
  )
}

export default UseReducer
