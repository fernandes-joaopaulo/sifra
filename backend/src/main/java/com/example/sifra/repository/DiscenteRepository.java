package com.example.sifra.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.sifra.model.Discente;
@Repository
public interface DiscenteRepository extends JpaRepository<Discente, Long> {}
