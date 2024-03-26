package com.MyBlogApp.model;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.Lob;
import jakarta.persistence.ManyToOne;

@Entity
public class BlogPost {
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int id;
	  private String title;
	  @Lob
	    @Column(columnDefinition = "TEXT")
	    private String content;
	    
	    @JsonBackReference
//	    @JsonIgnore
	    @ManyToOne
	    @JoinColumn(name="user_id", nullable = false)
	    private Users user;
	    
	   
	    public BlogPost(int id, String title, String content, Users user) {
			super();
			this.id = id;
			this.title = title;
			this.content = content;
			this.user = user;


		}

		 
		public BlogPost() {
	    	
	    }
	 		
		
	
		   public int getId() {
				return id;
			}

			public void setId(int id) {
				this.id = id;
			}

		
		public String getTitle() {
			return title;
		}
		public void setTitle(String title) {
			this.title = title;
		}
		public String getContent() {
			return content;
		}
		public void setContent(String content) {
			this.content = content;
		}
		public Users getUser() {
			return user;
		}
		public void setUser(Users user) {
			this.user = user;
		}


		
	    
	    
}
