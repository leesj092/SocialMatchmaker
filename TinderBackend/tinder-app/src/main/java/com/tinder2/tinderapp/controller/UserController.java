package com.tinder2.tinderapp.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.tinder2.tinderapp.model.User;
import com.tinder2.tinderapp.service.UserService;

@RestController
@RequestMapping("/user")
public class UserController {
    @Autowired
    private UserService userService;

    @PostMapping("/add")
    public String add(@RequestBody User user) {
        userService.saveUser(user);
        return "New user added!";
    }

    @GetMapping("/getAll")
    public List<User> getAllUsers() {
        return userService.getAllUsers();
    }

    @PutMapping("/update/{id}")
    public String update(@PathVariable Integer id, @RequestBody User user) {
        User existingUser = userService.getUserById(id);
        if (existingUser != null) {
            // Update the fields you want to change
            existingUser.setFirstName(user.getFirstName());
            existingUser.setLastName(user.getLastName());
            existingUser.setYear(user.getYear());
            existingUser.setMajor(user.getMajor());
            existingUser.setBiography(user.getBiography());
            existingUser.setProfilePicture(user.getProfilePicture());
            existingUser.setBirthday(user.getBirthday());
            // Save the updated user to the database
            userService.saveUser(existingUser);
            return "User updated successfully!";
        } else {
            return "User not found.";
        }
    }

    @DeleteMapping("/delete/{id}")
    public String delete(@PathVariable Integer id) {
        userService.deleteUser(id);
        return "User deleted successfully!";
    }
}
