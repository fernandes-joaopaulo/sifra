package com.example.sifra.dto;

import com.example.sifra.model.Frequencia;

public record FrequenciaDTO(Long id, boolean presente, DiscenteDTO discente) {
    
    public FrequenciaDTO(Frequencia data){
        this(
            data.getId(),
            data.isPresente(),
            new DiscenteDTO(data.getDiscente())
        );
    }
}
