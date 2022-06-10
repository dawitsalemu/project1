package com.revature.models;

enum Role{
    employee,
    manager
}

public class UserRole {
    private int roleId;
    private Role role;

    public UserRole(String role) {
        if(role.equalsIgnoreCase("employee"))
            this.role = Role.employee;
        else if (role.equalsIgnoreCase("manager"))
            this.role = Role.manager;
    }

    public UserRole(int roleId, String role) {
        if(role.equalsIgnoreCase("employee"))
        {
            this.roleId = roleId;
            this.role = Role.employee;
        }
        else if (role.equalsIgnoreCase("manager")){
            this.roleId = roleId;
            this.role = Role.manager;
        }
    }

    public int getRoleId() {
        return roleId;
    }

    public void setRoleId(int roleId) {
        this.roleId = roleId;
    }

    public Role getRole() {
        return role;
    }

    public void setRole(String role) {
        if(role.equalsIgnoreCase("employee"))
            this.role = Role.employee;
        else if (role.equalsIgnoreCase("manager"))
            this.role = Role.manager;
    }
}
