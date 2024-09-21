import ComponentD from "./ComponentD"
import { UserContext } from "./ComponentA.jsx"
import { useContext } from "react"
function ComponentC(){
    const user = useContext(UserContext);

    return(
        <div className="box">

            <h1>ComponentC</h1>
            <h2>Hello {user}</h2>
            <ComponentD/>
        </div>
    )

}
export default ComponentC