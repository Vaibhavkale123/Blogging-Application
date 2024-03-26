package com.MyBlogApp.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class FileInfo {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
		private long Imgid;
		private String name;
		  private String url;

		  public FileInfo(String name, String url) {
		    this.name = name;
		    this.url = url;
		  }

		  public String getName() {
		    return this.name;
		  }

		  public void setName(String name) {
		    this.name = name;
		  }

		  public String getUrl() {
		    return this.url;
		  }

		  public void setUrl(String url) {
		    this.url = url;
		  }
		

}
