package com.MyBlogApp.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.MyBlogApp.model.Users;

public interface UserRepository extends JpaRepository<Users, Integer>{

	

}
