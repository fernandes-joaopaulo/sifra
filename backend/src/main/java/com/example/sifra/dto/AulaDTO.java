package com.example.sifra.dto;

import java.sql.Date;
import java.util.List;

import com.example.sifra.model.Aula;

public record AulaDTO(Long id, Date data, List<FrequenciaDTO> frequencias) {

    public AulaDTO(Aula data) {
        this(data.getId(), data.getData(),
                data.getFrequencias().stream().map(FrequenciaDTO::new).toList());
    }
}
