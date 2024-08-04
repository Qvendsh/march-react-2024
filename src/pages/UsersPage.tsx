import React, {useEffect, useState} from 'react';
import UsersComponent from "../components/UsersComponent";
import {IUserModel} from "../models/IUserModel";
import {Outlet} from "react-router-dom";
import userApiService from "../services/user.api.service";


const UsersPage = () => {
    const [users, setUsers] = useState<IUserModel[]>([])
    useEffect(() => {
        userApiService.getAllUsers().then(value => setUsers(value.data))
    }, []);
    return (
        <div>
            <Outlet/>
            <hr/>
            <UsersComponent Users={users}/>
        </div>
    );
};

export default UsersPage;
