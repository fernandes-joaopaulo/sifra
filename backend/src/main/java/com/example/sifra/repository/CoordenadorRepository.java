package com.example.sifra.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.sifra.model.Coordenador;

@Repository
public interface CoordenadorRepository extends JpaRepository<Coordenador, Long> {}
