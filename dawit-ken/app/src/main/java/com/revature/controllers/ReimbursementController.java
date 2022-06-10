package com.revature.controllers;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.revature.services.ReimbursementServices;
import com.revature.models.*;
import io.javalin.http.Handler;
import org.eclipse.jetty.util.ajax.JSON;

import java.util.List;

public class ReimbursementController {
    private ReimbursementServices rs;
    private ObjectMapper om;

    public ReimbursementController(ReimbursementServices rs) {
        this.rs = rs;
        om = new ObjectMapper();
    }

    // handle add reimbursement
    public Handler handleAddReimbursement = (ctx) ->{

        if(ctx.req.getSession().getAttribute("loginName") == null){
            ctx.status(401);
            ctx.result("You must be logged in to add new reimbursement request");
        }
        else{
            int loggedUserId = (int)ctx.req.getSession().getAttribute("userId");
            Reimbursement reimbursement = om.readValue(ctx.body(), Reimbursement.class);

            if(loggedUserId == reimbursement.getReimbursementAuthor()){
                Reimbursement result = rs.addReimbursement(reimbursement);
                ctx.status(201);
                //ctx.result(result.toString());
                ctx.result(om.writeValueAsString(result));
            }
            else{
                ctx.status(401);
                ctx.result("Please submit a valid request");
            }
        }
    };

    public Handler handleViewReimbursementsOfAUser = (ctx) -> {
        int id = Integer.parseInt(ctx.pathParam("id"));

//        if(ctx.req.getSession().getAttribute("userRole") == "Manager" ||
//                (ctx.req.getSession().getAttribute("userRole") == "Employee" && (int)ctx.req.getSession().getAttribute("userId") == id)){
//
//            List<Reimbursement> rList = rs.viewReimbursementsOfAUser(id);
//            if(rList != null){
//                //ctx.result(rList.toString());
//                ctx.result(om.writeValueAsString(rList));
//            }
//            else{
//                ctx.result("Error");
//            }
//            //ctx.result(rList.toString());
//        }
        List<Reimbursement> rList = rs.viewReimbursementsOfAUser(id);
        if(rList != null){
            //ctx.result(rList.toString());
            ctx.result(om.writeValueAsString(rList));
        }
        else{
            ctx.result("Error");
        }
//        else {
//            ctx.status(401);
//            ctx.result("You must be logged in as an employee or manager to view the reimbursements");
//        }
    };

    public Handler handleViewReimbursements = (ctx) -> {
//        if(ctx.req.getSession().getAttribute("userRole") != "Manager"){
//            ctx.status(401);
//            ctx.result("You must be logged in as a manager to view all reimbursements");
//        }else{
//            List<Reimbursement> rList = rs.viewReimbursements();
//            if(rList != null){
//                ctx.result(rList.toString());
//            }
//            else{
//                ctx.result("Error");
//            }
//        }
        List<Reimbursement> rList = rs.viewReimbursements();
        if(rList != null){
            //ctx.result(rList.toString());
            ctx.result(om.writeValueAsString(rList));
        }
        else{
            ctx.result("Error");
        }
    };



    // handle update reimbursement
    public Handler handleUpdateReimbursement = (ctx) ->{
        if(ctx.req.getSession().getAttribute("userRole") != "Manager"){
            ctx.status(401);
            ctx.result("You must be logged in as a manager to update reimbursements");
        }
        else {
            Reimbursement reimb = om.readValue(ctx.body(), Reimbursement.class);

            double amount = reimb.getAmount();
            int reimbId = reimb.getReimbursementId();
            int status = reimb.getReimbursementStatus();
            String resolveDate = reimb.getResolvedDate();

            rs.updateReimbursement(amount, resolveDate, status, reimbId);
            ctx.result("Reimbursement updated.");
        }
    };

    // handle delete reimbursement
    public Handler handleDeleteReimbursement= (ctx)->{
        if(ctx.req.getSession().getAttribute("userRole") != "Manager"){
            ctx.status(401);
            ctx.result("You must be logged in as a manager to delete reimbursement");
        }
        else {
            int id = Integer.parseInt(ctx.pathParam("id"));
            rs.deleteReimbursement(id);
            ctx.result("Reimbursement with an id " + id + " is deleted.");
        }
    };
}
