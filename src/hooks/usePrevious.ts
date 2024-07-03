import React, {useEffect, useRef} from 'react';

const UsePrevious = (value:any) => {
 const ref=useRef()

    useEffect(()=>{
        ref.current=value
    },[value])

    return ref.current
};

export default UsePrevious;