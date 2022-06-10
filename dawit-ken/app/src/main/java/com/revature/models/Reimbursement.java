package com.revature.models;

import java.math.BigDecimal;
import java.sql.Date;

public class Reimbursement {
    private int reimbursementId;
    private double amount;
    private String submittedDate;
    private String resolvedDate;
    private String description;
    private int reimbursementAuthor;
    private int reimbursementResolver;
    private int reimbursementStatus;
    private int reimbursementType;


    public Reimbursement() {
    }

    public Reimbursement(int reimbursementId, double amount, String submittedDate, String resolvedDate, String description, int reimbursementAuthor, int reimbursementResolver, int reimbursementStatus, int reimbursementType) {
        this.reimbursementId = reimbursementId;
        this.amount = amount;
        this.submittedDate = submittedDate;
        this.resolvedDate = resolvedDate;
        this.description = description;
        this.reimbursementAuthor = reimbursementAuthor;
        this.reimbursementResolver = reimbursementResolver;
        this.reimbursementStatus = reimbursementStatus;
        this.reimbursementType = reimbursementType;
    }

    public int getReimbursementId() {
        return reimbursementId;
    }

    public void setReimbursementId(int reimbursementId) {
        this.reimbursementId = reimbursementId;
    }

    public double getAmount() {
        return amount;
    }

    public void setAmount(double amount) {
        this.amount = amount;
    }

    public String getSubmittedDate() {
        return submittedDate;
    }

    public void setSubmittedDate(String submittedDate) {
        this.submittedDate = submittedDate;
    }

    public String getResolvedDate() {
        return resolvedDate;
    }

    public void setResolvedDate(String resolvedDate) {
        this.resolvedDate = resolvedDate;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public int getReimbursementAuthor() {
        return reimbursementAuthor;
    }

    public void setReimbursementAuthor(int reimbursementAuthor) {
        this.reimbursementAuthor = reimbursementAuthor;
    }

    public int getReimbursementResolver() {
        return reimbursementResolver;
    }

    public void setReimbursementResolver(int reimbursementResolver) {
        this.reimbursementResolver = reimbursementResolver;
    }

    public int getReimbursementStatus() {
        return reimbursementStatus;
    }

    public void setReimbursementStatus(int reimbursementStatus) {
        this.reimbursementStatus = reimbursementStatus;
    }

    public int getReimbursementType() {
        return reimbursementType;
    }

    public void setReimbursementType(int reimbursementType) {
        this.reimbursementType = reimbursementType;
    }

    @Override
    public String toString() {
        return "{" +
                "\"reimbursementId\" : " + reimbursementId +
                ", \"amount\" : \"" + amount + "\"" +
                ", \"submittedDate\" : \"" + submittedDate + "\"" +
                ", \"resolvedDate\" : \"" + resolvedDate + "\"" +
                ", \"description\" : \"" + description + "\"" +
                ", \"reimbursementAuthor\" : \"" + reimbursementAuthor + "\"" +
                ", \"reimbursementResolver\" : \"" + reimbursementResolver + "\"" +
                ", \"reimbursementStatus\" : \"" + reimbursementStatus + "\"" +
                ", \"reimbursementType\" : " + reimbursementType +
                "}";
    }
}