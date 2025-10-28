package com.appbolera.appbolera_backend.repositories;
import com.appbolera.appbolera_backend.entities.Player;
import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PlayerRepository extends JpaRepository<Player, Long> {
    
    List<Player> findByGameId(String gameId);

}
