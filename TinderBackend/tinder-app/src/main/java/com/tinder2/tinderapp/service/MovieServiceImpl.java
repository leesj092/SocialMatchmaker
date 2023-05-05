package com.tinder2.tinderapp.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.tinder2.tinderapp.model.Movie;
import com.tinder2.tinderapp.repository.MovieRepository;

@Service
public class MovieServiceImpl implements MovieService{
    @Autowired
    private MovieRepository movieRepository;

    @Override
    public Movie saveMovie(Movie movie) {
       return movieRepository.save(movie);
    }

    @Override
    public List<Movie> getAllMovies() {
        return movieRepository.findAll();
    }

    @Override
    public void deleteMovie(Integer id) {
        movieRepository.deleteById(id);
    }

    @Override
    public Movie getMovieById(Integer id) {
        Optional<Movie> movie = movieRepository.findById(id);
        return movie.orElse(null);
    }
}
