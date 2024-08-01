import React, {FC, useEffect, useState} from 'react';
import {IUserModel} from "../models/IUserModel";

interface IProps{
    Users:IUserModel[]
}
const UsersComponent:FC<IProps> = ({Users}) => {
    const [users, setUsers] = useState()
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(value => value.json())
            .then(value => setUsers(value))
    }, []);
    return (
        <ul>
            {
                Users.map(User=>(<li>{User.id} {User.name}</li>))
            }
        </ul>
    );
};

export default UsersComponent;