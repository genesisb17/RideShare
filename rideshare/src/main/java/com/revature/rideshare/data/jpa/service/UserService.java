package com.revature.rideshare.data.jpa.service;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import com.revature.rideshare.data.jpa.domain.*;

public interface UserService {


	Page<User> getAll();

	
}
