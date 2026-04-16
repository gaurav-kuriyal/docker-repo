package com.coforge.controllers;

import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.coforge.entities.User;
import com.coforge.services.UserService;


@RestController
public class UserController {
	
	private static final Logger logger = LoggerFactory.getLogger(UserController.class);
	
	@Autowired
	UserService userService;
	
	@GetMapping("/")
	public List<User> getAllUsers(){
		logger.info("Fetching all user");
		return userService.getAllUsers();
	}
	
	@PostMapping("/user")
	public User saveUser(@RequestBody User user){
		logger.info("Saving user info {}",user);
		return userService.saveUser(user);
	}
	
	@GetMapping("/user/{userid}")
	public User getById(@PathVariable("userid") Long id){
		logger.info("Fetchin user of id {}",id);
		return userService.getById(id);
	}
}
