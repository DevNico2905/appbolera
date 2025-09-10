package com.appbolera.appbolera_backend.repositories;
import com.appbolera.appbolera_backend.entities.Game;
import org.springframework.data.jpa.repository.JpaRepository;

public interface GameRepository extends JpaRepository<Game, String>{
    
}
