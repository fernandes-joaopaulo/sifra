package com.example.sifra.dto;

import com.example.sifra.model.Turma;

public record TurmaResponseDTO(Long id, DisciplinaDTO disciplina) {
    
    public TurmaResponseDTO(Turma data) {
        this(
            data.getId(),
            new DisciplinaDTO(data.getDisciplina())
        );
    }
}
