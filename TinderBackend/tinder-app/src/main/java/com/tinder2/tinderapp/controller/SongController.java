package com.tinder2.tinderapp.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.tinder2.tinderapp.model.Song;
import com.tinder2.tinderapp.service.SongService;

@RestController
@RequestMapping("/song")
public class SongController {
    @Autowired
    private SongService songService;

    @PostMapping("/add")
    public String add(@RequestBody Song song){
        songService.saveSong(song);
        return "New song added!";
    }

    @GetMapping("/getAll")
    public List<Song> getAllUsers() {
        return songService.getAllSongs();
    }
}
