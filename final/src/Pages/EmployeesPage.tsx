import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Navbar } from './Navbar';
import { IUser } from '../Interfaces/IUser';

import './Styles/EmployeesPage.css';

// interface LoginFormProps {
//     onClick: (user:IUser, reimbursements:IReimbursement[]) => void
// }

interface Props{
    user: IUser;
    employees:IUser[];
}

export const EmployeesPage: React.FC<Props> = ({user, employees}) => {
    const navigator = useNavigate();

    const data = Array.from(employees);

    const goToUserPage = () => {
        navigator("/user");
    }

    const role = [
        {
          label: "Employee",
          value: 1,
        },
        {
          label: "Manager",
          value: 2,
        },
    ];

    return(
        <div>
            <Navbar />

            <div className = "employee">
                <div>
                    <button className="create-btn" onClick={goToUserPage}>Add New Employee</button>
                </div>
                <br/><br/><br/><br/><br/>
                
                <table>
                    <thead className = "employee-title">
                        <tr>
                            <td>Username</td><td>First Name</td>
                            <td>Last Name</td><td>Email</td>
                            <td>
                                <select className="role" id="role">
                                <option value="all">Role</option>
                                <option value="employee">Employee</option>
                                <option value="manager">Manager</option>
                                </select>
                            </td>
                        </tr>
                    </thead>
                    <tbody className = "employee-detail">
                        {
                        employees.map((employee, index) => {
                            const uniqueID = employee.userId;
                            return <tr key={uniqueID} className = "reimbursement-detail"><td>{employee.userName}</td>
                                    <td>{employee.firstName}</td><td>{employee.lastName}</td>
                                    <td>{employee.email}</td>
                                    {(() => {
                                        if (employee.role == 1) {
                                        return (
                                            <td>Employee</td>
                                        )
                                        } else if (employee.role == 2) {
                                            return (
                                                <td>Manager</td>
                                            )
                                        }
                                    })()}
                                </tr>
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    )
}