import React, {useEffect, useState} from 'react';
import UsersComponent from "../components/UsersComponent";
import {IUserModel} from "../models/IUserModel";
import userApiService from "../services/user.api.service";

const UsersPage = () => {
    const [users, setUsers] = useState<IUserModel[]>([])
    useEffect(() => {
        userApiService.getAllUsers().then(value => setUsers(value.data))
    }, []);
    return (
        <div>
            <UsersComponent Users={users}/>
        </div>
    );
};

export default UsersPage;
