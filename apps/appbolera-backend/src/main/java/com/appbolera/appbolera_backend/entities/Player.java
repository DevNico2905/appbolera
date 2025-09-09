package com.appbolera.appbolera_backend.entities;
import jakarta.persistence.*;
import java.util.List;

@Entity
@Table(name = "player")
public class Player {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long playerId;

    private String name;

    @OneToMany(mappedBy = "player", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<Frame> frames;

    // getters y setters
}
