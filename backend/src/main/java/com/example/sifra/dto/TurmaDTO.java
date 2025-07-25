package com.example.sifra.dto;

import java.util.List;

import com.example.sifra.model.Turma;

public record TurmaDTO(Long id, DisciplinaDTO disciplina, List<DiscenteDTO> discentes, List<AulaDTO> aulas) {
    
    public TurmaDTO(Turma data) {
        this(
            data.getId(),
            new DisciplinaDTO(data.getDisciplina()),
            data.getDiscentes().stream().map(DiscenteDTO::new).toList(),
            data.getAulas().stream().map(AulaDTO::new).toList()
        );
    }
}
