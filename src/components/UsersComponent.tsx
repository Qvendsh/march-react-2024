import React, {FC, useState} from 'react';
import withFetch from "../hoc/WithFetch";
import {IUser} from "../Models/IUser";

const UsersComponent:FC<{items: IUser[]}> = ({items}) => {
    return (
        <ul>
            {
                items.map(user=>(<li key={user.id}>{user.id}{user.name}</li>))
            }
        </ul>
    );
};

export default withFetch(UsersComponent,'/users');