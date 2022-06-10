package com.revature.dao;

import com.revature.models.Reimbursement;
import com.revature.models.User;
import com.revature.utils.ConnectionSingleton;

import java.sql.*;
import java.util.ArrayList;
import java.util.List;

public class ReimbursementDao implements IReimbursementDao{

    //public ConnectionSingleton cs = ConnectionSingleton.getConnectionSingleton();
    Connection c = ConnectionSingleton.getConnectionSingleton().getConnection();

    @Override
    public Reimbursement createReimbursement(Reimbursement reimbursement) {

        String sql = "INSERT INTO reimbursement (amount, submitted_date, resolved_date, description, reimbursement_author, reimbursement_resolver, reimbursement_status, reimbursement_type) values (?,?,?,?,?,?,?,?)";

        try{
            PreparedStatement ps = c.prepareStatement(sql);
            ps.setDouble(1, reimbursement.getAmount());
            ps.setString(2, reimbursement.getSubmittedDate());
            ps.setString(3, reimbursement.getResolvedDate());
            ps.setString(4, reimbursement.getDescription());
            ps.setInt(5, reimbursement.getReimbursementAuthor());
            ps.setInt(6, reimbursement.getReimbursementResolver());
            ps.setInt(7, reimbursement.getReimbursementStatus());
            ps.setInt(8, reimbursement.getReimbursementType());
            ps.execute();
            return reimbursement;
        }catch(SQLException e){
            e.printStackTrace();
            return null;
        }
    }

    @Override
    public List<Reimbursement> viewReimbursementsOfAUser(int userId) {
        String sql = "select * from reimbursement where reimbursement_author = "+userId+"";
        try{
            PreparedStatement ps = c.prepareStatement(sql);
            ResultSet rs = ps.executeQuery();

            List<Reimbursement> rlist = new ArrayList<Reimbursement>();
            while(rs.next()) {
                rlist.add(new Reimbursement(rs.getInt(1), rs.getDouble(2),
                        rs.getString(3), rs.getString(4), rs.getString(5),
                        rs.getInt(6), rs.getInt(7), rs.getInt(8), rs.getInt(9)));
            }
            return rlist;
        }catch(SQLException e){
            e.printStackTrace();
            return null;
        }
    }

    @Override
    public List<Reimbursement> viewReimbursements() {
        String sql = "select * from reimbursement";
        try{
            PreparedStatement ps = c.prepareStatement(sql);
            ResultSet rs = ps.executeQuery();

            List<Reimbursement> rlist = new ArrayList<Reimbursement>();
            while(rs.next()) {
                rlist.add(new Reimbursement(rs.getInt(1), rs.getDouble(2),
                        rs.getString(3), rs.getString(4), rs.getString(5),
                        rs.getInt(6), rs.getInt(7), rs.getInt(8), rs.getInt(9)));
            }
            return rlist;
        }catch(SQLException e){
            e.printStackTrace();
            return null;
        }
    }

    @Override
    public void updateReimbursement(double amount, String resolveDate, int status, int reimbId) {  // param: reimbursement_id, reimbursement_status, resolved_date
        String sql = "update reimbursement set amount = ?, resolved_date = ?, reimbursement_status = ? where reimbursement_id = ?";
        try{
            PreparedStatement ps = c.prepareStatement(sql);
            ps.setDouble(1, amount);
            ps.setString(2, resolveDate);
            ps.setInt(3, status);
            ps.setInt(4, reimbId);
            ps.execute();
        }catch(SQLException e){
            e.printStackTrace();
        }
    }

    @Override
    public void deleteReimbursement(int id) {
        String sql = "delete from reimbursement where reimbursement_id = ?";

        try{
            PreparedStatement ps = c.prepareStatement(sql);
            ps.setInt(1, id);
            ps.execute();
        }catch(SQLException e){
            e.printStackTrace();
        }
    }




}
