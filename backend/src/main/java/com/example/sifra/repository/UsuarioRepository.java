package com.example.sifra.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.sifra.dto.UsuarioResponseDTO;
import com.example.sifra.model.Usuario;

@Repository
public interface UsuarioRepository extends JpaRepository<Usuario, Long> {
    UsuarioResponseDTO findByEmailAndSenha(String email, String senha);
}
