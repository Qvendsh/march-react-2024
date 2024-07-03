import React, {FC} from 'react';
import useToggle from "../hooks/useToggle";

const ToggleComponent:FC = () => {

    const [value,toggleValue] = useToggle()

    return (
        <div>
            <hr/>
            <p>Current value : {value.toString()}</p>
            <button onClick={toggleValue}>Toggle</button>

        </div>
    );
};

export default ToggleComponent;