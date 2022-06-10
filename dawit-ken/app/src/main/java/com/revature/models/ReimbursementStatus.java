package com.revature.models;

// enum values for Reimbursement Status
enum Status {
    pending,
    accepted,
    denied,
    none
}

public class ReimbursementStatus {
    private int statusId;
    private Status status;

    public ReimbursementStatus(String status) {
        if(status.equalsIgnoreCase("pending"))
            this.status = Status.pending;
        else if (status.equalsIgnoreCase("accepted"))
            this.status = Status.pending;
        else if (status.equalsIgnoreCase("denied"))
            this.status = Status.denied;
        else{
            this.status = Status.none;
        }
    }

    public int getStatusId() {
        return statusId;
    }

    public void setStatusId(int statusId) {
        this.statusId = statusId;
    }

    public Status getStatus() {
        return status;
    }

    public void setStatus(String status) {
        if(status.equalsIgnoreCase("pending"))
            this.status = Status.pending;
        else if (status.equalsIgnoreCase("accepted"))
            this.status = Status.pending;
        else if (status.equalsIgnoreCase("denied"))
            this.status = Status.denied;
        else{
            this.status = Status.none;
        }
    }
}
