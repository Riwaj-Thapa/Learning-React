// import React, {useState} from 'react';

// function MyComponent(){

//     const [name,setName] = useState("Guest");

//     const [age, setAge] = useState(0);

//     const [isEmployed, setIsEmployed] = useState(false)
//     const updateName = () =>{
//         setName("Riwaj");
//     }
//     const incrementAge = () =>{
//         setAge(age+1);
//     }
//     const toggleEmployedStatus = () =>{
//         setIsEmployed(! isEmployed);
//     }

//     return(
//         <div>
//             <p>Name : {name}</p>
//             <button onClick={updateName}>Set Name</button>

//             <p>Age : {age}</p>
//             <button onClick={incrementAge}>Increment Age</button>

//             <p>Is employeed : {isEmployed ? "Yes" : "No"}</p>
//             <button onClick={toggleEmployedStatus}>Toggle Status</button>
//         </div>
//     )


// }
// export default MyComponent






// for onChange event handler 

// import React, {useState} from 'react'

// function MyComponent(){

//     const [name, setName] = useState("Guest");
//     const [quantity, setQuantity] = useState(1);
//     const [comment, setComment] = useState("");
//     const [payment, setPayment] = useState();
//     const [shipping, setShipping] = useState("");

//     function handleNameChange(e){
//         setName(e.target.value);
//     }
    
//     function handleQuantityChange(e){
//         setQuantity(e.target.value)
//     }

//     function handleCommentChange(e){
//         setComment(e.target.value)
//     }

//     function handlePaymentChange(e){
//         setPayment(e.target.value)
//     }

//     function handleShippingChange(e){
//         setShipping(e.target.value)
//     }

//     return(<>
    
//     <input value={name} onChange={handleNameChange} />
//     <p>Name: {name}</p>

//     <input value={quantity} onChange={handleQuantityChange} type='number'/>
//     <p>Quantity: {quantity}</p>

//     <textarea value={comment} onChange={handleCommentChange} placeholder='Enter delivery instructions'/>
//     <p>Comment: {comment}</p>

//     <select value={payment} onChange={handlePaymentChange}>
//         <option value="">Select an option</option>
//         <option value="Visa">Visa</option>
//         <option value="Mastercard">Mastercard</option>
//         <option value="Giftcard">Giftcard</option>

//     </select>
//     <p>
//         Payment:{payment}
//     </p>

//     <label>
//         <input type='radio' value="Pick Up" checked={shipping ==="Pick Up"} onChange={handleShippingChange}/>
//         Pick Up
//     </label>
//     <label>
//     <input type='radio' value="Delivery" checked={shipping ==="Delivery"} onChange={handleShippingChange}/>
//         Delivery
//     </label>

//     <p>
//         Shipping: {shipping}
//     </p>


//     </>)





// }

// export default MyComponent




import React,{useState} from "react";

function MyComponent(){

    const [car,setCar] = useState({year:2024, make:"ford", model:"Mustang"});

    function handleYearChange(e){
        setCar(c=>({...c,year: e.target.value}))

    }
    function handleMakeChange(e){
        setCar(c=>({...c,make: e.target.value}))

    }

    function handleModelChange(e){
        setCar(c=>({...c,model: e.target.value}))
    }


    
    return(
        <div>
            <p>Your faourite car is : {car.year} {car.model} {car.make}</p>

            <input type="number" value={car.year} onChange={handleYearChange}/>
            <br></br>
            <input type="text" value={car.make} onChange={handleMakeChange}/>
            <br></br>
            <input type="text" value={car.model} onChange={handleModelChange}/>
            <br></br>
        </div>
    )

}

export default MyComponent