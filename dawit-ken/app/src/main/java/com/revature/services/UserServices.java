package com.revature.services;

import com.revature.dao.IUserDao;
import com.revature.models.User;

import java.util.List;

public class UserServices {
    private IUserDao userDao;
    public UserServices(IUserDao userDao){
        this.userDao = userDao;
    }

    public User createUser(User user){
        return userDao.createUser(user);
    }
    public User login(String username, String password){
        User u = userDao.viewUserByUserName(username);
        if((u != null) && (password.equalsIgnoreCase(u.getPassword()))){
                return u;
        }
        else{
            return null;
        }
    }

    public User viewUser(int userId){
        return userDao.viewUser(userId);
    }
    public List<User> viewUsers(){ return userDao.viewAllUsers(); }

    public User updateUser(User user){ return userDao.updateUser(user); }
    public void deleteUser(int userId){
        userDao.deleteUser(userId);
    }
}
