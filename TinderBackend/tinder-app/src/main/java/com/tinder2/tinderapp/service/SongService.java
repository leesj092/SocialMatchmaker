package com.tinder2.tinderapp.service;

import java.util.List;

import com.tinder2.tinderapp.model.Song;

public interface SongService {
    public Song saveSong(Song song);
    public List<Song> getAllSongs();
    public void deleteSong(Integer id);
    public Song getSongById(Integer id);
}
