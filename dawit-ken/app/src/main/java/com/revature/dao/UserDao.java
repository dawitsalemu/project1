package com.revature.dao;

import com.revature.models.User;
import com.revature.utils.ConnectionSingleton;

import java.sql.*;
import java.util.ArrayList;
import java.util.List;

public class UserDao implements IUserDao{

    public ConnectionSingleton cs = ConnectionSingleton.getConnectionSingleton();
    Connection c = cs.getConnection();

    @Override
    public User createUser(User user) {
        Connection c = cs.getConnection();

        String sql = "INSERT INTO users (username, password, first_name, last_name, email, role) values ('"+user.getUserName()+
                "', '"+user.getPassword()+"', '"+user.getFirstName()+"', '"+user.getLastName()+"', '"+user.getEmail()+"', "+user.getRole()+")";
        try{
            PreparedStatement ps = c.prepareStatement(sql);

            ps.execute();

            return user;
        }catch(SQLException e){
            e.printStackTrace();
            return null;
        }
    }

    @Override
    public User viewUser(int id) {

        String sql = "select * from users where user_id = ?";
        try{
            PreparedStatement ps = c.prepareStatement(sql);
            ps.setInt(1, id);
            ResultSet rs = ps.executeQuery();
            User user = new User();
            while(rs.next()) {
                user = new User(rs.getInt(1), rs.getString(2), rs.getString(3), rs.getString(4), rs.getString(5), rs.getString(6), rs.getInt(7));

            }
            return user;
        }catch(SQLException e){
            e.printStackTrace();
            return null;
        }
    }

    @Override
    public User viewUserByUserName(String username){
        String sql = "select * from users where username = ?";
        try{
            PreparedStatement ps = c.prepareStatement(sql);
            ps.setString(1, username);
            ResultSet rs = ps.executeQuery();
            User user = new User();
            while(rs.next()) {
                user = new User(rs.getInt(1), rs.getString(2), rs.getString(3), rs.getString(4), rs.getString(5), rs.getString(6), rs.getInt(7));

            }
            return user;
        }catch(SQLException e){
            e.printStackTrace();
            return null;
        }
    }

    @Override
    public List<User> viewAllUsers() {
        String sql = "select * from users";
        try{
            PreparedStatement ps = c.prepareStatement(sql);
            ResultSet rs = ps.executeQuery();
            List<User> ulist = new ArrayList<>();
            while(rs.next()) {
                ulist.add(new User(rs.getInt(1), rs.getString(2), rs.getString(3), rs.getString(4), rs.getString(5), rs.getString(6), rs.getInt(7)));

            }
            return ulist;
        }catch(SQLException e){
            e.printStackTrace();
            return null;
        }
    }

    @Override
    public User updateUser(User user) {

        String sql = "update users set username = '"+user.getUserName()+"', password = '"+user.getPassword()+"', first_name = '"+user.getFirstName()+
                "', last_name = '"+user.getLastName()+"', email = '"+user.getEmail()+"', role = "+user.getRole()+" where user_id = "+user.getUserId()+"";
        try{
            PreparedStatement ps = c.prepareStatement(sql);

            ps.execute();

            return user;
        }catch(SQLException e){
            e.printStackTrace();
            return null;
        }
    }

    @Override
    public void deleteUser(int id) {
        String sql = "delete from users where user_id = ?";

        try{
            PreparedStatement ps = c.prepareStatement(sql);
            ps.setInt(1, id);
            ps.execute();
        }catch(SQLException e){
            e.printStackTrace();
        }
    }


}
