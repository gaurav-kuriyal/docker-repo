package com.coforge.services;


import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.coforge.entities.Student;
import com.coforge.repositories.StudentRepository;

@Service
public class StudentService {
	@Autowired
	StudentRepository studentRepository;
	
	public List<Student> getAllStudents(){
		return studentRepository.findAll();
	}
	
	public Student getStudentById(int id) {
		return studentRepository.findById(id).orElseThrow(()->new RuntimeException("Student Not Found"));
	}

	public void deleteStudent(int id) {
		studentRepository.deleteById(id);
	}
	
	public Student addStudent(Student student) {
		return studentRepository.save(student);
	}
	
	public Student updateStudent(int id,Student student) {
		Student s = studentRepository.findById(id).orElseThrow(()->new RuntimeException("Student Not Found"));
		s.setSname(student.getSname());
		s.setCourse(student.getCourse());
		return studentRepository.save(s);
	}
	
}
