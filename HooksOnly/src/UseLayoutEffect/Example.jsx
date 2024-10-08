import React, { useEffect, useLayoutEffect } from 'react'

function Example() {

    useEffect(()=>{
        console.log("Message from useEffect");
    },[])

    useLayoutEffect(()=>{
        console.log("Message from useLayout Effect")
    },[])
  return (
    <div>
      <h2>Test Message</h2>
      {Array(4000).fill('').map((items,index)=>

      (<li key={index}>{Math.pow(Math.random(), 10)}</li>
      ))}</div>);
    }
 


export default Example
