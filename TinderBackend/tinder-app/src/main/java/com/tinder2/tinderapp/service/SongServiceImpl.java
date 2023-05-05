package com.tinder2.tinderapp.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.tinder2.tinderapp.model.Song;
import com.tinder2.tinderapp.repository.SongRepository;

@Service
public class SongServiceImpl implements SongService{

    @Autowired
    private SongRepository songRepository;

    @Override
    public Song saveSong(Song song) {
       return songRepository.save(song);
    }

    @Override
    public List<Song> getAllSongs() {
        return songRepository.findAll();
    }

    @Override
    public void deleteSong(Integer id) {
        songRepository.deleteById(id);
    }

    @Override
    public Song getSongById(Integer id) {
        Optional<Song> song = songRepository.findById(id);
        return song.orElse(null);
    }
    
}
