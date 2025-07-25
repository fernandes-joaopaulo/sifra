package com.example.sifra.dto;

import com.example.sifra.model.Coordenador;

public record CoordenadorDTO(Long id, String nome, String telefone, String email, String image, String departamento, String perfil) {

    public CoordenadorDTO(Coordenador data) {
        this(data.getId(), data.getNome(), data.getTelefone(), data.getEmail(), data.getImage(),
                data.getDepartamento(), data.getPerfil());
    }
}
