import React, { useEffect, useState } from 'react'

function UselocalStorage(key, intialValue) {

    const [name, setName]=useState(
        localStorage.getItem(key) ?
        localStorage.getItem(key) : intialValue

    );

    useEffect(()=>{
        localStorage.setItem(key,name)

    },[name,key])

  return [name,setName ]
}

export default UselocalStorage
