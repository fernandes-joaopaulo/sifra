package com.example.sifra.model;

import com.example.sifra.dto.*;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "usuarios")
@Getter
@NoArgsConstructor
@AllArgsConstructor
@EqualsAndHashCode(of = "id")
@Inheritance(strategy = InheritanceType.JOINED)
public class Usuario {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String nome;
    private String telefone;
    private String email;
    private String senha;
    private String image;
    private String perfil;

    public Usuario(UsuarioRequestDTO data) {
        this.nome = data.nome();
        this.telefone = data.telefone();
        this.email = data.email();
        this.senha = data.senha();
        this.image = data.image();
        this.perfil = data.perfil();
    }
}
