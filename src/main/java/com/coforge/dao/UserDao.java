package com.coforge.dao;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.coforge.entities.User;
import com.coforge.repositories.UserRepository;

@Repository
public class UserDao {
	@Autowired
	UserRepository userRepository;
	
	public List<User> getAllUsers(){
		return userRepository.findAll();
	}

	public User saveUser(User user){
		return userRepository.save(user);
	}

	public User getById(Long id){
		return userRepository.findById(id).orElseThrow(()->new RuntimeException());
	}
}
