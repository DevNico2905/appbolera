package com.appbolera.appbolera_backend.entities;
import jakarta.persistence.*;
import java.util.List;

@Entity
public class Frame {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long frameId;

    private int frameNumber;

    @ManyToOne
    @JoinColumn(name = "game_id")
    private Game game;

    @ManyToOne
    @JoinColumn(name = "player_id")
    private Player player;

    @OneToMany(mappedBy = "frame", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<Roll> rolls;

    // getters y setters
}
