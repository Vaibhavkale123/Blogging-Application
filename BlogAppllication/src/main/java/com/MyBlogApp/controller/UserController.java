package com.MyBlogApp.controller;

import java.util.List;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.MyBlogApp.model.Users;
import com.MyBlogApp.service.UserService;

@RestController
@RequestMapping("/api")
public class UserController {

//    private List<Users> User = new ArrayList<>();
    
    @Autowired
    UserService userservice;
    
    @GetMapping("/user")
    public ResponseEntity<List<Users>> getAllUses() {
    	
        return new ResponseEntity<>(userservice.getUser(), HttpStatus.OK);
    }

    

    @GetMapping("/user/{id}")
    public ResponseEntity<Users> getUsers(@PathVariable int id) {
        return new ResponseEntity<Users>(userservice.getUsersById(id), HttpStatus.OK);
    }
    
    
    @PostMapping("/user")
    public ResponseEntity<Users> createUsers(@RequestBody Users Users) {
//        Uses.add(Users);
    	userservice.addUser(Users);
        return new ResponseEntity<>(HttpStatus.CREATED);
    }

   
    @PutMapping("/user/{id}")
    public ResponseEntity<Users> updateUsers(@PathVariable int id, @RequestBody Users Users) {
//        Users existingUsers = Uses.get(id);
//        existingUsers.setTitle(Users.getTitle());
//        existingUsers.setContent(Users.getContent());
    	userservice.updateUser(id, Users);
        return new ResponseEntity<>( HttpStatus.ACCEPTED);
    }

    @DeleteMapping("/user/{id}")
    public ResponseEntity<Void> deleteUsers(@PathVariable int id) {
//        Uses.remove(id);
    userservice.deleteUser(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}
