package com.revature.services;

import com.revature.dao.IReimbursementDao;
import com.revature.models.Reimbursement;
import com.revature.models.User;

import java.util.List;

public class ReimbursementServices {
    private IReimbursementDao reimbursementDao;

    public ReimbursementServices(IReimbursementDao reimbursementDao) {
        this.reimbursementDao = reimbursementDao;
    }

    // add reimbursement request by an employee
    public Reimbursement addReimbursement(Reimbursement reimbursement){
        return reimbursementDao.createReimbursement(reimbursement);
    }
    public List<Reimbursement> viewReimbursements(){return reimbursementDao.viewReimbursements();}
    public List<Reimbursement> viewReimbursementsOfAUser(int userId){return reimbursementDao.viewReimbursementsOfAUser(userId);}

    // update reimbursement request
    public void updateReimbursement(double amount, String resolveDate, int status, int reimbId){
        reimbursementDao.updateReimbursement(amount, resolveDate, status, reimbId);
    }

    // delete reimbursement request
    public void deleteReimbursement(int reimbursementId){
        reimbursementDao.deleteReimbursement(reimbursementId);
    }


}
