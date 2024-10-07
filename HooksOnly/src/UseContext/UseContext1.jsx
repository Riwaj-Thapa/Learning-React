import { createContext} from "react";

export const UseContext = createContext();

const ContextProvider = (props) =>{
    const phone = "+ 1212121"

    return(
        <UseContext.Provider value={phone}>
            {props.phone}
        </UseContext.Provider>

    )
}

export default ContextProvider