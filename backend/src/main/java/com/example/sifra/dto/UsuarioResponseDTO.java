package com.example.sifra.dto;

import com.example.sifra.model.Usuario;

import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;
import lombok.Getter;

@Getter
@NoArgsConstructor
@AllArgsConstructor
public class UsuarioResponseDTO {

    private Long id;
    private String nome;
    private String telefone;
    private String email;
    private String image;
    private String perfil;

    public UsuarioResponseDTO(Usuario usuario){
        this.id = usuario.getId();
        this.nome = usuario.getNome();
        this.telefone = usuario.getTelefone();
        this.email = usuario.getEmail();
        this.image = usuario.getImage();
        this.perfil = usuario.getPerfil();
    }
}
