package com.appbolera.appbolera_backend.entities;

import lombok.NoArgsConstructor;
import java.time.LocalDateTime;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "game")
@NoArgsConstructor
public class Game {

        @Id
        @Column(nullable = false, length = 36)
        private String gameId;

        @Column(nullable = false)
        private LocalDateTime createdAt;

        public void setGameId(String id) {
            this.gameId = id;
        }

        public void setCreatedAt(LocalDateTime now) {
            this.createdAt = now;
        }

}

    /*
    @OneToMany(mappedBy = "game", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<Frame> frames; */
