import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import defaultImage from '../deafultpic.jpg';
import { Link, useNavigate } from 'react-router-dom';
import { IUser } from '../Interfaces/IUser';
import { logout } from '../Slices/UserSlice';
import { AppDispatch, RootState } from '../Store';

import './Styles/Navbar.css';

// export const Navbar: React.FC<IUser> = (user: IUser) => {

//     const navigator = useNavigate();

//     const handlePageChange = (event:React.MouseEvent<HTMLAnchorElement>) => {
//         if(event.currentTarget.id == "home"){
//             navigator("/home");
//         } else if(event.currentTarget.id == "reimbursements"){
//             navigator("/reimbursements");
//         }else if(event.currentTarget.id == "user"){
//             navigator("/user");
//         }else if(event.currentTarget.id == "employees"){
//             navigator("/employees");
//         }else if(event.currentTarget.id == "logout"){
//             navigator("/login");
//         }
//     }

    // if(user.role == 2){
    //     return(
    //         <ul className="topnav">
    //             <li><a className="" id="home" onClick={handlePageChange}>Home</a></li>
    //             <li><a className="" id="reimbursements" onClick={handlePageChange}>Reimbursement Requests</a></li>
    //             <li><a className="" id="user" onClick={handlePageChange}>
    //                 <p className="user-name">&nbsp;{user.firstName} {user.lastName}</p></a></li>
    //             <li><a className="" id="employees" onClick={handlePageChange}>Employees</a></li>
    //             <li id="logout"><a className="" id="logout" onClick={handlePageChange}>Logout</a></li>
    //         </ul>
    //     )
    // }
    // else{
    //     return(
    //         <ul className="topnav">
    //             <li><a className="" id="home" onClick={handlePageChange}>Home</a></li>
    //             <li><a className="" id="reimbursements" onClick={handlePageChange}>Reimbursement Requests</a></li>
    //             <li><a className="" id="user" onClick={handlePageChange}>
    //                 <p className="user-name">&nbsp;{user.firstName} {user.lastName}</p></a></li>
    //             <li id="logout"><a className="" id="logout" onClick={handlePageChange}>Logout</a></li>
    //         </ul>
    //     )
    // }
// }

//<img className="post-image" src={defaultImage} />

export const Navbar: React.FC = () => {

    const userInfo = useSelector((state:RootState)=> state.user);
    const dispatch:AppDispatch = useDispatch();

    const handleLogout = () => {
        dispatch(logout());
    }

    const showName = () => {
        console.log("Name: " +  userInfo.user?.firstName);
    }

    const user = useSelector((state:RootState) => state.user.user);

    return(
        <ul className="topnav">
            <li><Link to={"/home"} className="nav-link">Home</Link></li>
            <li><Link to={"/reimbursements"} className="nav-link">Reimbursement Requests</Link></li>
            <li><Link to={"/user"} className="nav-link">{userInfo.user?.firstName} {userInfo.user?.lastName}</Link></li>
            {userInfo.user?.role == 2 ? <li><Link to={"/employees"} className="nav-link">Employees</Link></li> : <></>}
            <li  className="logout"><Link to={"/login"} className="nav-link logout"  onClick={handleLogout}>Logout</Link></li>
        </ul>
    )
}