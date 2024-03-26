package com.MyBlogApp.service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.function.Consumer;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.stereotype.Service;

import com.MyBlogApp.Repository.BlogRepository;
import com.MyBlogApp.model.BlogPost;


@Service
public class BlogService {
	@Autowired
	private BlogRepository blogRepository;
	
//	private List<BlogPost> blogPostlist= new ArrayList<>();
    public BlogService() {
    	
//    	blogPostlist.add(new BlogPost("FirstBlog","bla bla bla"));
    }
    
    
    //Get Blogs
    public List<BlogPost> getBlogs() {
    	return blogRepository.findAll();
    }
    
    //Get Blogs by id
    public BlogPost getBlogById(int id) {
    	return blogRepository.findById(id).get();
    }
    
    
    public Optional<BlogPost> getBlogsById(int id) {
    	return blogRepository.findById(id);
    	 
    }
    
    //Post Blog
    public void addBlog(BlogPost blogPost) {
    	int id=(int) blogRepository.count();
    	blogPost.setId(++id);
    	
    	blogRepository.save(blogPost);
    	
    }
    
    //Put Blog
    public void updateBlog(int id,BlogPost updatedBlog) {
    	Optional<BlogPost> blogPost=blogRepository.findById(id);
    	
    	
		blogPost.ifPresent(blog -> 
		{blog.setContent(updatedBlog.getContent());
			blog.setTitle(updatedBlog.getTitle());
			});
		blogRepository.save(blogPost.get());
		
    } 
    
    //Delete Blog
    public void deleteBlog(int id) {
    	blogRepository.deleteById(id);
    	
    }
    			
    
}
