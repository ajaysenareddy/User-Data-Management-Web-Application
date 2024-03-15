package com.springwebapp.taskproj.Repository;

import com.springwebapp.taskproj.Entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepo extends JpaRepository<User,Integer> {
}
