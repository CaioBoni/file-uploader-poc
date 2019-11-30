package com.poc.fileuploader.model;

import java.util.List;

import org.springframework.web.multipart.MultipartFile;

public class DTO {
	
	private Long id;
	private List<MultipartFile> files;
	
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public List<MultipartFile> getFiles() {
		return files;
	}
	public void setFiles(List<MultipartFile> files) {
		this.files = files;
	}

}
