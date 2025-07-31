package com.example.sifra.dto;

import com.example.sifra.model.Disciplina;

public record DisciplinaDTO(Long id, String codigo, String nome, Integer cargaHoraria, Integer faltasPermitidas) {
    
    public DisciplinaDTO(Disciplina data){
        this(data.getId(), data.getCodigo(), data.getNome(), data.getCargaHoraria(), data.getFaltasPermitidas());
    }
}
