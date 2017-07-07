package com.revature.rideshare.data.jpa.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.transaction.annotation.Transactional;

import com.revature.rideshare.data.jpa.dao.UserRepository;
import com.revature.rideshare.data.jpa.domain.User;

@Component("userService")
@Transactional
public class UserServiceImpl implements UserService{

	private final UserRepository userRepo;
	
	@Autowired
	public UserServiceImpl(UserRepository userRepo){
		this.userRepo = userRepo;
	}

	@Override
	public List<User> getAll() {
			return userRepo.findAll();
	}

	@Override
	public void addUser(User u) {
		userRepo.saveAndFlush(u);
	}
	
}
