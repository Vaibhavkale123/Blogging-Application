package com.MyBlogApp.controller;

import org.springframework.web.bind.annotation.*;

import com.MyBlogApp.model.BlogPost;
import com.MyBlogApp.service.BlogService;

import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Component;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import java.util.List;
import java.util.ArrayList;

@RestController
@RequestMapping("/api")
public class BlogController {

//    private List<BlogPost> blogPosts = new ArrayList<>();
    
    @Autowired
    BlogService blogservice;
    
    @GetMapping("/blog")
    public ResponseEntity<List<BlogPost>> getAllBlogPosts() {
    	
        return new ResponseEntity<>(blogservice.getBlogs(), HttpStatus.OK);
    }

    

    @GetMapping("/blog/{id}")
    public ResponseEntity<BlogPost> getBlog(@PathVariable int id) {
        return new ResponseEntity<>(blogservice.getBlogById(id), HttpStatus.OK);
    }
    
    
    
    @PostMapping("/blog")
    public ResponseEntity<BlogPost> createBlogPost(@RequestBody BlogPost blogPost) {
//        blogPosts.add(blogPost);
    	blogservice.addBlog(blogPost);
        return new ResponseEntity<>(HttpStatus.CREATED);
    }

   
    @PutMapping("/blog/{id}")
    public ResponseEntity<BlogPost> updateBlogPost(@PathVariable int id, @RequestBody BlogPost blogPost) {
//        BlogPost existingBlogPost = blogPosts.get(id);
//        existingBlogPost.setTitle(blogPost.getTitle());
//        existingBlogPost.setContent(blogPost.getContent());
    	blogservice.updateBlog(id, blogPost);
        return new ResponseEntity<>( HttpStatus.ACCEPTED);
    }

    @DeleteMapping("/blog/{id}")
    public ResponseEntity<Void> deleteBlogPost(@PathVariable int id) {
//        blogPosts.remove(id);
    blogservice.deleteBlog(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}
