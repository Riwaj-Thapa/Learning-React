import { element } from 'prop-types';
import React, {useState} from 'react';

function MyComponentArray(){

    const [foods, setFood] = useState(["Apple","Orange","Banana"]);

    function handleAddFood(e){
        const newFood = document.getElementById("foodInput").value;
        document.getElementById("foodInput").value = "";

        setFood( f=>[...f,newFood])

    }

    function handleRemoveFood(index){

        setFood(foods.filter((_, i)=> i !==index));

    }

    return(<div>
        <h2>list of food</h2>

        <ul>
            {foods.map((food, index)=> 
            <li key={index} onClick={()=>handleRemoveFood(index)}>{food}
            </li>)}
        </ul>

        <input type='text' id='foodInput' placeholder='Enter Food name'/>

        <button onClick={handleAddFood}>Add Food</button>
    </div>)


}

export default MyComponentArray