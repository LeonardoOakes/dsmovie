package com.dsmovieproject.dsmovie.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.dsmovieproject.dsmovie.entities.Score;
import com.dsmovieproject.dsmovie.entities.ScorePK;

public interface ScoreRepository extends JpaRepository<Score, ScorePK> {

}
