package com.example.sifra.dto;

import com.example.sifra.model.Usuario;

public record UsuarioResponseDTO(Long id, String nome, String telefone, String email, String senha, String perfil) {

    public UsuarioResponseDTO(Usuario usuario){
        this(usuario.getId(), usuario.getNome(), usuario.getTelefone(), usuario.getEmail(), usuario.getSenha(), usuario.getPerfil());
    }
}
