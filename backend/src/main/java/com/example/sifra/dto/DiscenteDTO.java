package com.example.sifra.dto;

import com.example.sifra.model.Discente;

public record DiscenteDTO(Long id, String nome, String telefone, String email, String image,
        String matricula, String curso, String semestreIngresso, String perfil, int faltas) {

            public DiscenteDTO(Discente data, int faltas){
                this(
                    data.getId(),
                    data.getNome(),
                    data.getTelefone(),
                    data.getEmail(),
                    data.getImage(),
                    data.getMatricula(),
                    data.getCurso(),
                    data.getSemestreIngresso(),
                    data.getPerfil(),
                    faltas
                );
            }
}
