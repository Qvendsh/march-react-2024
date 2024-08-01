import React, {FC, useEffect, useState} from 'react';
import {IUserModel} from "../models/IUserModel";

interface IProps{
    Users:IUserModel[]
}
const UsersComponent:FC<IProps> = ({Users}) => {
    return (
        <ul>
            {
                Users.map(User=>(<li key={User.id}>{User.id} {User.name}</li>))
            }
        </ul>
    );
};

export default UsersComponent;