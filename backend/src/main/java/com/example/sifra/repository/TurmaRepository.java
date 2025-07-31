package com.example.sifra.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.example.sifra.model.Discente;
import com.example.sifra.model.Turma;

@Repository
public interface TurmaRepository extends JpaRepository<Turma, Long> {
    @Query("SELECT d FROM Turma t JOIN t.discentes d WHERE t.id = :turmaId ORDER BY LOWER(d.nome)")
    List<Discente> findDiscentesByTurmaIdOrdered(@Param("turmaId") Long turmaId);
}
