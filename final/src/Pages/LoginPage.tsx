// import axios, { AxiosResponse } from 'axios';
import React, {useEffect, useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
// import { IReimbursement } from '../Interfaces/IReimbursement';
// import { IUser } from '../Interfaces/IUser';
import { loginUser } from '../Slices/UserSlice';
import { AppDispatch, RootState } from '../Store';

import "./Styles/LoginForm.css";

// interface LoginFormProps {
//     reimbursement: IReimbursement[];
//     onClick: (user:IUser, reimbursements:IReimbursement[], employees: IUser[]) => void
// }

// export const LoginPage: React.FC<LoginFormProps> = (props: LoginFormProps) => {

//     const [username, setUsername] = useState<string>("");
//     const [password, setPassword] = useState<string>("");
//     const [error, setError] = useState(false);
//     let myInfo, requests, allEmployees: AxiosResponse<IUser[], any>;

//     const navigator = useNavigate();
    
//     const handleInput = (event:React.ChangeEvent<HTMLInputElement>) => {
//         if(event.target.name === "username"){
//             setUsername(event.target.value);
//         }
//         else {
//             setPassword(event.target.value);
//         }
//     }
    
//     const handleLogin = async (event:React.MouseEvent<HTMLButtonElement>) => {
//         let credentials = {
//             username: username,
//             password: password
//         };

//         try{
//             myInfo = await axios.post<IUser>('http://localhost:8000/users/login', credentials);
//             let user:IUser = {
//                 userId: myInfo.data.userId,
//                 userName: myInfo.data.userName,
//                 password: myInfo.data.password,
//                 firstName: myInfo.data.firstName,
//                 lastName: myInfo.data.lastName,
//                 email: myInfo.data.email,
//                 role: myInfo.data.role
//             };

            

//             if(user.role == 1){
//                 requests = await axios.get<IReimbursement[]>(`http://localhost:8000/reimbursement/view/${user.userId}`);
//                 allEmployees = await axios.get<IUser[]>(`http://localhost:8000/users/${user.userId}`);
//                 console.log(requests.data);
//                 props.onClick(user, requests == null? props.reimbursement: requests.data, allEmployees.data);
//                 navigator("/home");
//                 setError(false);
//             }else if (user.role == 2) {
//                 requests = await axios.get<IReimbursement[]>('http://localhost:8000/reimbursement/all');
//                 allEmployees = await axios.get<IUser[]>('http://localhost:8000/users/view/all');
//                 console.log(requests.data);
//                 props.onClick(user, requests.data, allEmployees.data);
//                 navigator("/home");
//                 setError(false);
//             }
//             else{
//                 navigator("/login");
//                 setError(true);
//             }
//         }
//         catch (e){
//             setError(true);
//         }
//     }
    
//     return(
        // <div className="login">
        //     <div className="text-container">
        //         <h2 className="login-header">Reimbursement System</h2>
        //     </div>
        //     <form className="login-form">
        //         <div className="input-div">
        //             <h4 className="input-h4">Username</h4>
        //             <input autoComplete="off" className="login-input" type="text" placeholder="username" name="username" onChange={handleInput}/>
        //         </div>
        //         <div className="input-div">
        //             <h4 className="input-h4">Password</h4>
        //             <input autoComplete="off" className="login-input" type="password" name="password" placeholder="password" onChange={handleInput}/>
        //         </div>
        //     </form>

        //     {error ? <h1>Username or password incorrect</h1> : <></>}

        //     <br/>
        //     <button className="login-button" onClick={handleLogin}>Login</button>
        // </div>
//     )
// }

export const LoginPage: React.FC = () =>{

    const userState = useSelector((state:RootState)=> state.user);
    const navigator = useNavigate();

    useEffect(()=>{
        if(!userState.error && userState.user){
            console.log("Successful Login");
            navigator('/home');
        }
    }, [userState]);

    const [username, setUsername] = useState<string>("");
    const [password, setPassword] = useState<string>("");

    const dispatch: AppDispatch = useDispatch();
    
    const handleInput = (event:React.ChangeEvent<HTMLInputElement>) => {
        if(event.target.name === "username"){
            setUsername(event.target.value);
        }
        else {
            setPassword(event.target.value);
        }
    }

    const handleLogin = (event:React.MouseEvent<HTMLButtonElement>) => {
        let credentials = {
            username,
            password
        };

        dispatch(loginUser(credentials));

        if(!userState.error && userState.user){
            console.log("Successful Login");
            navigator('/home');
        }
    }

    return (
        <>
            <div className="login-page">
                {/* {userState.error ? <h2 className="login-error">Username or password incorrect</h2> : <></>} */}
                <div className="login">
                    <div className="text-container">
                        <h2 className="login-header">Reimbursement System</h2>
                    </div>
                    <form className="login-form">
                        <div className="input-div">
                            <h4 className="input-h4">Username</h4>
                            <input autoComplete="off" className="login-input" type="text" placeholder="username" name="username" onChange={handleInput}/>
                        </div>
                        <div className="input-div">
                            <h4 className="input-h4">Password</h4>
                            <input autoComplete="off" className="login-input" type="password" name="password" placeholder="password" onChange={handleInput}/>
                        </div>
                    </form>

                    {userState.error ? <p className="login-error">Username or password incorrect</p> : <></>}

                    <br/>
                    <button className="login-button" onClick={handleLogin}>Login</button>
                </div>
            </div>
        </>
    )
}