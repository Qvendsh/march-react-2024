import React, {FC, useState} from 'react';
import usePrevious from "../hooks/usePrevious";

interface Sth {
    value:number
}

const PreviousComponent:FC<Sth> = () => {
    const [value, setValue] = useState<number>(0)
    const previousValue=usePrevious(value)

    
    return (
        <div>
            <hr/>
            <div>
                <button onClick={()=>{
                    setValue((previousValue:number)=>{
                        return previousValue+1
                    })
                }}>Click here </button>
                <p>value: {value}</p>
                <p>here is previous value: {previousValue}</p>
            </div>
        </div>
    );
};

export default PreviousComponent;