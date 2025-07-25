package com.example.sifra.dto;

import com.example.sifra.model.Admin;

public record AdminDTO(Long id, String nome, String telefone, String email, String image, String perfil){

    public AdminDTO(Admin data){
        this(data.getId(), data.getNome(), data.getTelefone(), data.getEmail(), data.getImage(), data.getPerfil());
    }
}
