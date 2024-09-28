import { useEffect, useState } from "react"

function Comp1(){

    const [count,setCount]= useState(0)

    // simple call back only

    // useEffect(()=>{
    //     setTimeout(()=>{
    //         setCount(c=>c+1)
    //     },2000)
    // },)

    // cb and []

    // useEffect(()=>{
    //     setTimeout(()=>{
    //         setCount(c=>c+1)
    //     },2000)
    // },[])

    // cb and [variable]

    useEffect(()=>{
        setTimeout(()=>{
            setCount(c=>c+1)
        },2000)
    },[count])


return(
    
    <>
    <h1>
        I've rendered {count} times !
    </h1>
    </>
)

}

export default Comp1
