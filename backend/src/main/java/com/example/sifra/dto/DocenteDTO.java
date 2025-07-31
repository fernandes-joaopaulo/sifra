package com.example.sifra.dto;

import java.util.List;

import com.example.sifra.model.Docente;

public record DocenteDTO(Long id, String nome, String telefone, String email, String image, String departamento,
        String perfil, List<TurmaResponseDTO> turmasAtivas) {

    public DocenteDTO(Docente data) {
        this(
                data.getId(),
                data.getNome(),
                data.getTelefone(),
                data.getEmail(),
                data.getImage(),
                data.getDepartamento(),
                data.getPerfil(),
                data.getTurmasAtivas() != null ? data.getTurmasAtivas().stream().map(TurmaResponseDTO::new).toList() : null
                );
    }
}
