import React, { useState } from 'react';
import { IReimbursement } from '../Interfaces/IReimbursement';
import { IUser } from '../Interfaces/IUser';
import { Navbar } from './Navbar';

import './Styles/LoginForm.css';

interface Props{
    user: IUser;
    reimbursement:IReimbursement;
}

export const ReimbursementPage: React.FC<Props> = ({user, reimbursement}) => {

    const [amount, setAmount] = useState<number>(0);
    const handleAmountChange = (event:React.ChangeEvent<HTMLInputElement>) => {
        setAmount(Number(event.target.value));
    }
    
    const [submittedDate, setSubmittedDate] = useState<string>("");
    const handleSubmittedDateChange = (event:React.ChangeEvent<HTMLInputElement>) => {
        setSubmittedDate(event.target.value);
    }

    const [description, setDescription] = useState<string>("");
    const handleDescriptionChange = (event:React.ChangeEvent<HTMLTextAreaElement>) => {
        setDescription(event.target.value);
    }

    const [type, setType] = useState<any>();
    const handleTypeChange = (event:React.ChangeEvent<HTMLOptionElement>) => {
         setType(event.target.value);
    }

    const handleReimbursementUpdate = (event:React.MouseEvent<HTMLButtonElement>) => {
        // axios
   }

    const types = [
        {
          label: "Lodging",
          value: 1,
        },
        {
          label: "Travel",
          value: 2,
        },
        {
          label: "Food",
          value: 3,
        },
        {
          label: "Other",
          value: 4,
        },
      ];

    return(
        <>
            <Navbar />
            <div className="user-form">
                <div className="content-container">
                    <form>
                        <label>Amount</label>
                        <input autoComplete="off" className="user-input" type="text" id="" onChange={handleAmountChange}/>
                        <br/>
                        <label>Submitted Date</label>
                        <input autoComplete="off" className="user-input" type="text" id="" onChange={handleSubmittedDateChange}/>
                        <br/>
                        <label>Description</label>
                        <textarea autoComplete="off" className="user-input" id="" onChange={handleDescriptionChange}></textarea>
                        <br/>
                        <div><label>Type</label><br/>
                        <select>
                            {types.map((type) => (
                            <option key={type.value} value={type.value} onChange={
                                handleTypeChange
                            }>{type.label}</option>
                            ))}
                        </select></div>
                        
                        <br/>
                        <br/>
                        <br/>
                    </form>
                    <button className="login-button" onClick={handleReimbursementUpdate}>Add</button>
                </div>
            </div>
        </>
    )
}