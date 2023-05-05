package com.tinder2.tinderapp.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.tinder2.tinderapp.model.User;

public interface UserRepository extends JpaRepository<User, Integer> {

}