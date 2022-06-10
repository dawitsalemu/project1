import { IReimbursement } from "./IReimbursement"

export interface IUser {
    userId: number,
    userName: any,
    password: any,
    firstName: any,
    lastName: any,
    email: any,
    role: number,
    reimbursements?: IReimbursement[]
}