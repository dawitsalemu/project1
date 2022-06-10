import { IUser } from "./IUser"

export interface IReimbursement{
    reimbursementId: number,
    amount: number,
    submittedDate: string,
    resolvedDate: string,
    description: string,
    reimbursementAuthor: number,
    reimbursementResolver: number,
    reimbursementStatus: number,
    reimbursementType: number
}