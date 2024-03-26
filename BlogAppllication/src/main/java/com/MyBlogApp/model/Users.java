package com.MyBlogApp.model;

import java.util.List;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonManagedReference;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;

@Entity
public class Users {
	

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int uid;
	  private String name;
	    private String role;
	    private String password;

		@JsonManagedReference
	    @JsonIgnore
	    @OneToMany(mappedBy = "user")
	    private List<BlogPost> blogpost;
	    
	    public Users(int uid, String name, String role, String password, List<BlogPost> blogpost) {
			super();
			this.uid = uid;
			this.name = name;
			this.role = role;
			this.password = password;
			this.blogpost = blogpost;
		}

	    
	    public Users() {}


	

		public int getUid() {
			return uid;
		}

		public void setUid(int uid) {
			this.uid = uid;
		}

		public String getName() {
			return name;
		}

		public void setName(String name) {
			this.name = name;
		}

		public String getRole() {
			return role;
		}

		public void setRole(String role) {
			this.role = role;
		}

		public String getPassword() {
			return password;
		}


		public void setPassword(String password) {
			this.password = password;
		}


		public List<BlogPost> getBlogpost() {
			return blogpost;
		}

		public void setBlogpost(List<BlogPost> blogpost) {
			this.blogpost = blogpost;
		}

	
		
	    
	    
}
