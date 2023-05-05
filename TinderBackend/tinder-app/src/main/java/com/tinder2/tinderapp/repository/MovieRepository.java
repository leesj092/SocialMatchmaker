package com.tinder2.tinderapp.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.tinder2.tinderapp.model.Movie;

public interface MovieRepository extends JpaRepository<Movie, Integer> {
    
}
