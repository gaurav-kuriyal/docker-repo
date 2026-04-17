package com.coforge.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.coforge.entities.Student;
import com.coforge.services.StudentService;

@RestController
@CrossOrigin(origins = "*")
public class StudentController {
	@Autowired
	StudentService studentService;
	
	@GetMapping("/students")
	public ResponseEntity<List<Student>> getAllStudents (){
		System.out.println("Enterred");
		return new ResponseEntity<>(studentService.getAllStudents(),HttpStatus.OK);
	}

	@GetMapping("/students/{id}")
	public ResponseEntity<Student> getStudentById (@PathVariable("id") int id){
		return new ResponseEntity<>(studentService.getStudentById(id),HttpStatus.OK);
	}

	@DeleteMapping("/students/{id}")
	public ResponseEntity<String> deleteStudent (@PathVariable("id") int id){
		studentService.deleteStudent(id);
		return new ResponseEntity<>("Deleted",HttpStatus.OK);
	}

	@PostMapping("/students")
	public ResponseEntity<Student> addStudent (@RequestBody Student student){
		student.setId(0);
		return new ResponseEntity<>(studentService.addStudent(student),HttpStatus.OK);
	}
	
	@PutMapping("/students/{id}")
	public ResponseEntity<Student> updateStudent (@PathVariable("id") int id,@RequestBody Student student){
		return new ResponseEntity<>(studentService.updateStudent(id,student),HttpStatus.OK);
	}

}
