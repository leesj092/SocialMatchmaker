package com.tinder2.tinderapp.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.tinder2.tinderapp.model.Song;

public interface SongRepository extends JpaRepository<Song, Integer> {
    
}
