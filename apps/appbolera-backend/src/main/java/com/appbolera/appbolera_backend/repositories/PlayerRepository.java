package com.appbolera.appbolera_backend.repositories;
import com.appbolera.appbolera_backend.entities.Player;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PlayerRepository extends JpaRepository<Player, Long> {
    
}
