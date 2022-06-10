import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Navbar } from "./Navbar";
import { IReimbursement } from "../Interfaces/IReimbursement";
import { IUser } from "../Interfaces/IUser";

import "./Styles/HomePage.css";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../Store";

export const HomePage: React.FC = () => {

    const userInfo = useSelector((state:RootState)=> state.user);
    const navigator = useNavigate();

    const goTo = async (event:React.MouseEvent<HTMLButtonElement>) => {
        if(event.currentTarget.name == "profile"){
            navigator("/user");
        }else if(event.currentTarget.name == "reimbursements"){
            navigator("/reimbursements");
        }
        else if(event.currentTarget.name == "employees"){
            navigator("/employees");
        }
        else if(event.currentTarget.name == "logout"){
            navigator("/login");
        }
        else if(event.currentTarget.name == "user"){
            navigator("/user");
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
                    <div className="options">
                        <button className="remb-button" name="reimbursements" onClick={goTo}>Reimbursement Requests</button><br/>
                        {userInfo.user?.role == 2 ? <><button className="remb-button" name="employees" onClick={goTo}>Employees</button><br /></> : <></>}
                        <button className="profile-button" name="profile" onClick={goTo}>Profile</button><br/>
                        <button className="logout-button" name="logout" onClick={goTo}>Logout</button><br/>
                    </div>
            </>
        )
    }
    else{
        return(<></>)
    }
    
}