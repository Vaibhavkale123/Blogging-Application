package com.MyBlogApp.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.MyBlogApp.model.BlogPost;

public interface BlogRepository extends JpaRepository<BlogPost, Integer>{

	

}
