package com.revature.controllers;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.revature.services.UserServices;
import com.revature.models.*;
import io.javalin.http.Handler;
import javax.servlet.http.HttpSession;
import java.util.List;

public class UserController {
    private UserServices us;
    private ObjectMapper om;

    public UserController(UserServices us) {
        this.us = us;
        om = new ObjectMapper();
    }

    // handle add user
    public Handler handleUserRegistration = (ctx) ->{
        User user = om.readValue(ctx.body(), User.class);
        User result = us.createUser(user);
        if(result != null){
            us.login(result.getUserName(),result.getPassword());
            ctx.status(201);
            ctx.result(us.login(result.getUserName(),result.getPassword()).toString());
        }
        else{
            ctx.status(401);
            ctx.result("You are not registered");
        }
    };

    // handle user login
    public Handler handleUserLogin = (ctx) ->{
        LoginObject loginObject = om.readValue(ctx.body(), LoginObject.class);
        User loggedUser = us.login(loginObject.username, loginObject.password);

        if(loggedUser == null) {
            ctx.status(403);
            ctx.result("Login Invalid!");
        }
        else{
            HttpSession session = ctx.req.getSession();
            session.setAttribute("loginName", loggedUser.getUserName());
            if(loggedUser.getRole() == 1){
                session.setAttribute("userRole", "Employee");
                session.setAttribute("userId", loggedUser.getUserId());
            }
            else{
                session.setAttribute("userRole", "Manager");
                session.setAttribute("userId", loggedUser.getUserId());
            }
            ctx.result(om.writeValueAsString(loggedUser));
        }
    };

    public Handler handleUserLogout = (ctx) ->{
      ctx.req.getSession().invalidate();
      ctx.result("User Logged Out");
    };

    //  handle view users
    public Handler handleViewUser = (ctx)  ->{
        int id = Integer.parseInt(ctx.pathParam("id"));

//        if(ctx.req.getSession().getAttribute("userId") == null){
//            ctx.result("Login first");
//        }
//        else if ((int)ctx.req.getSession().getAttribute("userId") == id || ctx.req.getSession().getAttribute("userRole") == "Manager"){
//            //ctx.result(us.viewUser(id).toString());
//            ctx.result(om.writeValueAsString(us.viewUser(id).toString()));
//        }
//        else{
//            ctx.status(401);
//            ctx.result("You must be logged in as a manager to view user");
//        }

        ctx.result(om.writeValueAsString(us.viewUser(id).toString()));
    };

    public Handler handleViewUsers = (ctx) -> {
//        if(ctx.req.getSession().getAttribute("userRole") != "Manager"){
//            ctx.status(401);
//            ctx.result("You must be logged in as a manager to view all users");
//        }else{
//            List<User> ulist = us.viewUsers();
//            //ctx.result(ulist.toString());
//            ctx.result(om.writeValueAsString(ulist));
//        }
        List<User> ulist = us.viewUsers();
        //ctx.result(ulist.toString());
        ctx.result(om.writeValueAsString(ulist));
    };

    // handle update users
    public Handler handleUpdateUser = (ctx) ->{
        User user = om.readValue(ctx.body(), User.class);
//        int loggedUserId = (int)ctx.req.getSession().getAttribute("userId");
//        int givenUserId = user.getUserId();
//        String loggedUserRole = ctx.req.getSession().getAttribute("userRole").toString();
//
//        if(loggedUserRole == "Manager" || loggedUserId == givenUserId) {
//            us.updateUser(user);
//            if(us.updateUser(user) == null){
//                ctx.result("User not updated.");
//            }
//            else{
//                ctx.result("User updated.");
//            }
//
//        }else{
//            ctx.status(403);
//            ctx.result("You must be a manager or updating yourself to continue");
//        }
        us.updateUser(user);
    };

    // handle delete users
    public Handler handleDeleteUser= (ctx)->{
        int loggedUserId = (int)ctx.req.getSession().getAttribute("userId");
        String loggedUserRole = ctx.req.getSession().getAttribute("userRole").toString();
        int givenUserId = Integer.parseInt(ctx.pathParam("id"));

        if ( ((loggedUserRole == "Employee") && loggedUserId == givenUserId) || (loggedUserRole == "Manager") ){
            us.deleteUser(givenUserId);
            if((loggedUserRole == "Employee") || (loggedUserRole == "Manager" && loggedUserId == givenUserId)){
                ctx.req.getSession().invalidate();
            }
            ctx.result("User deleted.");
        }else{
            ctx.status(403);
            ctx.result("You must be logged in as a manager to delete the user");
        }
    };


}
