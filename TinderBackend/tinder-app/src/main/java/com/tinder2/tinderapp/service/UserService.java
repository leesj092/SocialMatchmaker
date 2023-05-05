package com.tinder2.tinderapp.service;

import java.util.List;

import com.tinder2.tinderapp.model.User;

public interface UserService {
    public User saveUser(User user);
    public List<User> getAllUsers();
    public void deleteUser(Integer id);
    public User getUserById(Integer id);
}
