package com.appbolera.appbolera_backend.repositories;
import com.appbolera.appbolera_backend.entities.Roll;
import org.springframework.data.jpa.repository.JpaRepository;

public interface RollRepository extends JpaRepository<Roll, Long> {
    
}
