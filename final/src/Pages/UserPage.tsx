import React, { useState } from 'react';
import { Navbar } from './Navbar';
import { IUser } from '../Interfaces/IUser';

import './Styles/LoginForm.css';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../Store';
import { useNavigate } from 'react-router-dom';
import { updateUser } from '../Slices/UserSlice';

interface Props{
    user: IUser;
}

export const UserPage: React.FC = () => {
    
    const userInfo = useSelector((state:RootState)=> state.user);
    const navigator = useNavigate();
    const dispatch: AppDispatch = useDispatch();

    const [password, setPassword] = useState<string>("");
    const [firstName, setFirstName] = useState<string>("");
    const [lastName, setLastName] = useState<string>("");
    const [email, setEmail] = useState<string>("");

    let change = {
        userId: userInfo.user?.userId,
        userName: userInfo.user?.userName,
        password: userInfo.user?.password,
        firstName: userInfo.user?.firstName,
        lastName: userInfo.user?.lastName,
        email: userInfo.user?.email,
        role: userInfo.user?.role
    };

    const handleInput = (event:React.ChangeEvent<HTMLInputElement>) => {
        if(event.target.name === "password"){
            change.password = event.target.value;
        }
        else if(event.target.name === "firstName"){
            change.password = event.target.value;
        }
        if(event.target.name === "lastName"){
            change.password = event.target.value;
        }
        if(event.target.name === "email"){
            change.password = event.target.value;
        }
    }

    const handleUserUpdate = (event:React.MouseEvent<HTMLButtonElement>) => {
        if(!userInfo.error && userInfo.user){
            dispatch(updateUser(change));
            console.log("Successful Update");
            navigator('/user');
        }
    }

    if(userInfo.error && !userInfo.user){
        console.log("Unsuccessful Login");
        navigator('/login');
        return(<></>)
    }else if(!userInfo.error && userInfo.user){
        return(
            <>
                <Navbar />
                <div className="user-form">
                    <div className="content-container">
                        <form>
                            <label>User ID</label>
                            <input autoComplete="off" className="login-input" type="number" placeholder={userInfo.user.userId.toString()} name="userId" readOnly/>
                            <br/><br/>
                            <label>Username</label>
                            <input autoComplete="off" className="login-input" type="text" placeholder={userInfo.user.userName} name="userName" readOnly/>
                            <br/><br/>
                            <label>Password</label>
                            <input autoComplete="off" className="login-input" type="password" placeholder={userInfo.user.password} name="password" onChange={handleInput}/>
                            <br/><br/>
                            <label>First Name</label>
                            <input autoComplete="off" className="login-input" type="text" placeholder={userInfo.user.firstName} name="firstName" onChange={handleInput}/>
                            <br/><br/>
                            <label>Last Name</label>
                            <input autoComplete="off" className="login-input" type="text" placeholder={userInfo.user.lastName} name="lastName" onChange={handleInput}/>
                            <br/><br/>
                            <label>Email</label>
                            <input autoComplete="off" className="login-input" type="text" placeholder={userInfo.user.email.toString()} name="email" onChange={handleInput}/>
                            <br/><br/>
                            <label>Role</label>
                            <input autoComplete="off" className="login-input" type="text" placeholder={userInfo.user.role == 1? "Employee": "Manager"} name="role" readOnly/>
                            <br/><br/><br/><br/>
                        </form>
                        <button className="login-button" onClick={handleUserUpdate}>Update</button>
                    </div>
                </div>
            </>
        )
    }
    else{
        return(<></>)
    }

    
}

