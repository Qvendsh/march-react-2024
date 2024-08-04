import React, {FC} from 'react';
import {IUserModel} from "../models/IUserModel";
import {Link} from "react-router-dom";

interface IProps{
    Users:IUserModel[]
}
const UsersComponent:FC<IProps> = ({Users}) => {
    return (
        <ul>
            {
                Users.map(User=>(<li key={User.id}>
                    <Link to={User.id.toString()} state={User}>  {User.id} {User.name}</Link>
                </li>))
            }
        </ul>
    );
};

export default UsersComponent;