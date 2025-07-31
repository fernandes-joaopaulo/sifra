package com.example.sifra.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.sifra.model.Aula;

@Repository
public interface AulaRepository extends JpaRepository<Aula, Long> {
    
}
