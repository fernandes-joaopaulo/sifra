package com.example.sifra.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.sifra.dto.LoginResponseDTO;
import com.example.sifra.model.Usuario;
public interface UsuarioRepository extends JpaRepository<Usuario, Long> {
    LoginResponseDTO findByEmailAndSenha(String email, String senha);
}
