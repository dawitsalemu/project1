package com.revature.models;

public class User{
    private int userId;
    private String userName;
    private String password;
    private String firstName;
    private String lastName;
    private String email;
    private int role;

    public User() {
    }

    public User(String userName, String password, String firstName, String lastName, String email, int role) {
        this.userName = userName;
        this.password = password;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.role = role;
    }

    public User(int userId, String userName, String password, String firstName, String lastName, String email, int role) {
        this.userId = userId;
        this.userName = userName;
        this.password = password;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.role = role;
    }

    public int getUserId() {
        return userId;
    }

    public void setUserId(int userId) {
        this.userId = userId;
    }

    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public int getRole() {
        return role;
    }

    public void setRole(int role) {
        this.role = role;
    }

    @Override
    public String toString() {
        return "{" +
                "\"userId\" : " + userId +
                ", \"userName\" : \"" + userName + "\"" +
                ", \"password\" : \"" + password + "\"" +
                ", \"firstName\" : \"" + firstName + "\"" +
                ", \"lastName\" : \"" + lastName + "\"" +
                ", \"email\" : \"" + email + "\"" +
                ", \"role\" : " + role +
                "}";
    }
}