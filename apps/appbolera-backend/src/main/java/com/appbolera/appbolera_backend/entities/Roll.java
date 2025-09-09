package com.appbolera.appbolera_backend.entities;
import jakarta.persistence.*;

@Entity
public class Roll {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long rollId;

    private int rollNumber;
    private int pinsKnocked;

    @ManyToOne
    @JoinColumn(name = "frame_id")
    private Frame frame;

    // getters y setters
}

