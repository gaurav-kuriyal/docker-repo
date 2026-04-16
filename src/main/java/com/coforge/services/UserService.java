package com.coforge.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.coforge.dao.UserDao;
import com.coforge.entities.User;

@Service
public class UserService {
	@Autowired
	UserDao userDao;
	
	public List<User> getAllUsers(){
		return userDao.getAllUsers();
	}

	public User saveUser(User user){
		return userDao.saveUser(user);
	}

	public User getById(Long id){
		return userDao.getById(id);
	}
}
