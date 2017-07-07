package com.revature.rideshare.data.jpa.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
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
	public Page<User> getAll() {
			return this.userRepo.findAll();
	}
	
}
