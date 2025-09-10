package com.appbolera.appbolera_backend.web;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import com.appbolera.appbolera_backend.entities.Game;
import com.appbolera.appbolera_backend.entities.Player;
import com.appbolera.appbolera_backend.repositories.GameRepository;
import com.appbolera.appbolera_backend.repositories.PlayerRepository;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;


@RestController
@CrossOrigin("*")
public class Controller {
    
    @Autowired
    private GameRepository gameRepository;

    @Autowired
    private PlayerRepository playerRepository;

    // Crear un nuevo juego
    @PostMapping("/saveGameId/{gameId}")
    public ResponseEntity<Game> saveGameId(@PathVariable String gameId) {
        Game game = new Game();
        game.setGameId(gameId);
        game.setCreatedAt(java.time.LocalDateTime.now());
        Game response = gameRepository.save(game);
        return ResponseEntity.ok(response);
    }

    // Guardar los jugadores.
    @PostMapping("/savePlayers")
    public ResponseEntity<List<Player>> savePlayers(@RequestBody List<Player> players) {
        List<Player> savedPlayers = playerRepository.saveAll(players);
        return ResponseEntity.ok(savedPlayers);
    }
    
}
