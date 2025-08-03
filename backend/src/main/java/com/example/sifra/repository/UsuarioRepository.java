package com.example.sifra.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.sifra.dto.LoginResponseDTO;
import com.example.sifra.model.Usuario;
import java.util.Optional;


@Repository
public interface UsuarioRepository extends JpaRepository<Usuario, Long> {
    LoginResponseDTO findByEmailAndSenha(String email, String senha);
    Optional<Usuario> findById(Long id);
}
