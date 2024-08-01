import React from 'react';
import {Link} from "react-router-dom";

const HeaderComponent = () => {
    return (
        <div>
            Header
            <br/>
            <Link to={"/"}>Home page</Link>
            <br/>
            <Link to={"users"}>Users page</Link>
            <br/>
            <Link to={"posts"}>Posts page</Link>
            <br/>
            <Link to={"comments"}>Comments page</Link>
            <hr/>
        </div>
    );
};

export default HeaderComponent;