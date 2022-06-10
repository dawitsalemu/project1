package com.revature.dao;

import com.revature.models.*;

import java.util.List;

public interface IReimbursementDao{
    public Reimbursement createReimbursement(Reimbursement reimbursement);
    //public Reimbursement viewReimbursement(int id);
    public void updateReimbursement(double amount, String resolveDate, int status, int reimbId);
    public void deleteReimbursement(int id);
    public List<Reimbursement> viewReimbursementsOfAUser(int userId);
    public List<Reimbursement> viewReimbursements();
}