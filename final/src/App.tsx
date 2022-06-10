import { useState } from 'react';
import { BrowserRouter, Navigate, Route, Routes, useNavigate } from 'react-router-dom';
import { LoginPage } from './Pages/LoginPage';
import { IUser } from "./Interfaces/IUser";

import './App.css';
import { IReimbursement } from './Interfaces/IReimbursement';
import { HomePage } from './Pages/HomePage';
import { ReimbursementsPage } from './Pages/ReimbursementsPage';
import { EmployeesPage } from './Pages/EmployeesPage';
import { UserPage } from './Pages/UserPage';
import { ReimbursementPage } from './Pages/ReimbursementPage';

function Root() {

  const navigator = useNavigate();

  const [user, setUser] = useState<IUser>({
    userId: 1,
    userName: "",
    password: "",
    firstName: "",
    lastName: "",
    email: "",
    role: -1
  });

  const [reimbursement, setReimbursement] = useState<IReimbursement>({
    reimbursementId: 0,
    amount: 0,
    submittedDate: "",
    resolvedDate: "",
    description: "",
    reimbursementAuthor: 0,
    reimbursementResolver: 0,
    reimbursementStatus: 0,
    reimbursementType: 0
  });

  const [reimbursements, setReimbursements] = useState<IReimbursement[]>([]); // array of reimbursement requests
  const [employees, setEmployees] = useState<IUser[]>([]); // array of employees
  //const [reimbursement, setreimbursement] = useState<IReimbursement>();

  const pullUpUser = (loggedIn:IUser, reimbursements:IReimbursement[], employees: IUser[]) => {
    setUser(loggedIn);
    setReimbursements(reimbursements);
    setEmployees(employees);
    //console.log("logged User " + user)
  }

  // type reimbPageValue = {
  //   user: IUser,
  //   reimbursements: IReimbursement[]
  // }
  return (
      <Routes >
          <Route path="/" element={<Navigate to="/login" replace />} />
          
          {/* <Route path="/login" element={<LoginPage onClick={pullUpUser} reimbursement={[]}/>}/> */}
          <Route path="/login" element={<LoginPage />}/>

          <Route path="/home" element={<HomePage />}/>
          {/* <Route path="/reimbursements" element={<ReimbursementsPage user={user} reimbursements={reimbursements}/>}/> */}
          {/* <Route path="/employees" element={<EmployeesPage user={user} employees={employees}/>}/> */}
          <Route path="/user" element={<UserPage />}/>
          {/* <Route path="/reimbursement" element={<ReimbursementPage user={user} reimbursement={reimbursement}/>}/> */}
      </Routes>)
}

function App() {
  return (
    <BrowserRouter>
      <Root />
    </BrowserRouter>
  );
}

export default App;

//EmployeesPage