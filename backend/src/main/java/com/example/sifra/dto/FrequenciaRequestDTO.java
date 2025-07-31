package com.example.sifra.dto;

import java.time.LocalDate;
import java.util.List;

public record FrequenciaRequestDTO(
    Long turmaId,
    LocalDate data,
    List<FrequenciaDiscenteDTO> discentes
) {}