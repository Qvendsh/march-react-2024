import React, {useEffect, useState} from 'react';
import UsersComponent from "../components/UsersComponent";
import {IUserModel} from "../models/IUserModel";

const UsersPage = () => {
    const [users, setUsers] = useState<IUserModel[]>([])
    fetch("https://jsonplaceholder.typicode.com/users")
        .then(value => value.json())
        .then(value => setUsers(value))
    return (
        <div>
            <UsersComponent Users={users}/>
        </div>
    );
};

export default UsersPage;
