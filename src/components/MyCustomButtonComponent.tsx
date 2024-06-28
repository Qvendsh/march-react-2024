import React, {FC, useState} from 'react';

interface IProps{
    children:React.ReactNode,
    label:string
}

const MyCustomButtonComponent:FC<IProps> = ({label,children}) => {

    const [counter, setcounter] = useState<number>(0);

   const  ClickFunction = ()=>{
        setcounter(counter+1);
    }

    return (
        <div>
            <span>{label}</span>
          <button onClick={()=>{ClickFunction()}}>{children}{counter}</button>

        </div>
    );
};

export default MyCustomButtonComponent;