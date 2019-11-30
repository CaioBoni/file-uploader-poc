package com.poc.fileuploader.controller;

import java.io.IOException;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.poc.fileuploader.model.DTO;

@RestController
@CrossOrigin(methods = RequestMethod.POST)
public class FilesController {
	
	@PostMapping(value = "/dto", consumes = { "application/json", "multipart/form-data" })
	public ResponseEntity<?> post(@RequestBody(required = false) DTO dto) {
		return new ResponseEntity<DTO>(dto, HttpStatus.OK);
	}
	
	@PostMapping(value = "/filesForm", consumes = { "application/json", "multipart/form-data" })
	public ResponseEntity<?> receive(@ModelAttribute("dto") DTO dto) throws IOException {
		
		System.out.println("ID: " + dto.getId());
		if(dto.getFiles() != null) {
			for (MultipartFile file : dto.getFiles()) {
				System.out.println("Nome " + file.getOriginalFilename());
				System.out.println("Bytes " + file.getBytes().toString());
			}
		}
		
		return new ResponseEntity<>(dto.getId().toString(), HttpStatus.OK);
	}
	
	@PostMapping(value = "/files")
	public ResponseEntity<?> receiveObj(
			@RequestParam(name = "id", required = false) Long id, 
			@RequestParam(name = "nome", required = false) String nome, 
			@RequestParam(name = "files", required = false) MultipartFile files) throws IOException {
		return new ResponseEntity<>(id, HttpStatus.OK);
	}

}
