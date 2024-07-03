import {useState} from "react";

const useToggle=(initialValue=false) =>{

    const [value, setValue] = useState<boolean>(initialValue)

    const toggleValue = ()=>{
        setValue(prevState => !prevState)
    }

    return [value, toggleValue]
}


export default useToggle;