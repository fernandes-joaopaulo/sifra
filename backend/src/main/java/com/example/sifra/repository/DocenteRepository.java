package com.example.sifra.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.sifra.model.Docente;

@Repository
public interface DocenteRepository extends JpaRepository<Docente, Long> {
}

