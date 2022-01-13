package com.dsmovieproject.dsmovie.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.dsmovieproject.dsmovie.entities.Movie;

public interface MovieRepository extends JpaRepository<Movie, Long> {

}
