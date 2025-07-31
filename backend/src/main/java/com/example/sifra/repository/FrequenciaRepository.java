package com.example.sifra.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.sifra.model.Frequencia;

@Repository
public interface FrequenciaRepository extends JpaRepository<Frequencia, Long> {
    int countByDiscenteIdAndPresenteFalse(Long discenteId);
}
