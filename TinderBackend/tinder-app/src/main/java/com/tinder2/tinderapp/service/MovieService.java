package com.tinder2.tinderapp.service;

import java.util.List;

import com.tinder2.tinderapp.model.Movie;

public interface MovieService {
    public Movie saveMovie(Movie movie);
    public List<Movie> getAllMovies();
    public void deleteMovie(Integer id);
    public Movie getMovieById(Integer id);
}
