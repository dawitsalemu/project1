import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Navbar } from './Navbar';
import { IReimbursement } from '../Interfaces/IReimbursement';
import { IUser } from '../Interfaces/IUser';

import './Styles/ReimbursementsPage.css';

// interface LoginFormProps {
//     onClick: (user:IUser, reimbursements:IReimbursement[]) => void
// }

interface Props{
    user: IUser;
    reimbursements:IReimbursement[];
}

export const ReimbursementsPage: React.FC<Props> = ({user, reimbursements}) => {
    const navigator = useNavigate();

    const data = Array.from(reimbursements);

    const goToReimbursementPage = () => {
        navigator("/reimbursement");
    }

    const status = [
        {
          label: "Pending",
          value: 1,
        },
        {
          label: "Approved",
          value: 2,
        },
        {
          label: "Denied",
          value: 3,
        },
    ];

    return(
        <div>
            <Navbar />

            <div className = "reimbursement">
                <table>
                    <caption><button onClick={goToReimbursementPage}>Add New Reimbursement Request</button></caption>
                    <thead className = "reimbursement-title">
                        <tr>
                            <td>Amount</td><td>Submited Date</td><td>Resolved Date</td>
                            <td>Description</td><td>Author</td><td>Resolver</td>
                            {/* <td>Status</td> */}
                            <td>
                                <select className="status" id="status">
                                <option value="all">Status</option>
                                <option value="pending">Pending</option>
                                <option value="approved">Approved</option>
                                <option value="denied">Denied</option>
                                </select>
                            </td>
                        </tr>
                    </thead>
                    <tbody className = "reimbursement-detail">
                        {
                        reimbursements.map(reimbursement => {
                            const uniqueID = reimbursement.reimbursementId;
                            return <tr key={uniqueID} className = "reimbursement-detail"><td>{reimbursement.amount}</td><td>{reimbursement.submittedDate}</td>
                                    <td>{reimbursement.resolvedDate}</td><td>{reimbursement.description}</td>
                                    <td>{reimbursement.reimbursementAuthor}</td><td>{reimbursement.reimbursementResolver}</td>
                                    {(() => {
                                        if (reimbursement.reimbursementStatus == 1) {
                                        return (
                                            <td>Pending</td>
                                        )
                                        } else if (reimbursement.reimbursementStatus == 2) {
                                            return (
                                                <td>Approved</td>
                                            )
                                        } else if (reimbursement.reimbursementStatus == 3) {
                                            return (
                                                <td>Denied</td>
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