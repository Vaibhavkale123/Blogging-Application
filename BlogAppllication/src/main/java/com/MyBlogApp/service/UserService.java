package com.MyBlogApp.service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.MyBlogApp.Repository.UserRepository;
import com.MyBlogApp.model.Users;


@Service
public class UserService {
	@Autowired
	private UserRepository userRepository;
	
//	private List<Users> Userlist= new ArrayList<Users>();
    public UserService() {
    	
//    	Userlist.add(new Users(1, "FirstUser","bla bla bla"));
    }
    
    
    //Get User
    public List<Users> getUser() {
    	return userRepository.findAll();
    }
    
    //Get User by id
    public Users getUserById(int id) {
    	return userRepository.findById(id).get();
    }
    
    
    public Users getUsersById(int id) {
    	return userRepository.findById(id).get();
    	 
    }
    
    //Post User
    public void addUser(Users Users) {
    	int id=(int) userRepository.count();
    	Users.setUid(++id);
    	userRepository.save(Users);
    	
    }
    
    //Put User
    public void updateUser(int id,Users updatedUser) {
    	Optional<Users> Users=userRepository.findById(id);
    	
    	
		Users.ifPresent(User -> 
		{User.setName(updatedUser.getName());
			User.setRole(updatedUser.getRole());
			});
		userRepository.save(Users.get());
		
    } 
    
    //Delete User
    public void deleteUser(int id) {
    	userRepository.deleteById(id);
    	
    }
    			
    
}
