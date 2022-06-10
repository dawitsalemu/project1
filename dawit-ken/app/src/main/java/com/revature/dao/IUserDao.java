package com.revature.dao;
import com.revature.models.*;

import java.util.List;

public interface IUserDao {
    public User createUser(User user);
    public User viewUser(int id);
    public User viewUserByUserName(String username);
    public User updateUser(User user);
    public void deleteUser(int id);

    public List<User> viewAllUsers();
}
