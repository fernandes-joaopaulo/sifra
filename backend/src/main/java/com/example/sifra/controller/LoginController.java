package com.example.sifra.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.server.ResponseStatusException;

import com.example.sifra.dto.LoginRequestDTO;
import com.example.sifra.dto.LoginResponseDTO;
import com.example.sifra.repository.UsuarioRepository;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/auth")
public class LoginController {

    @Autowired
    private UsuarioRepository repository;

    @PostMapping("/login")
    public LoginResponseDTO login(@RequestBody LoginRequestDTO data) {

        LoginResponseDTO usuario = repository.findByEmailAndSenha(data.email(), data.senha());
        if (usuario == null) {
            // Retorna 401 Unauthorized se não encontrar ou senha estiver errada
            throw new ResponseStatusException(HttpStatus.UNAUTHORIZED, "Email ou senha inválidos");
        }
        return usuario;
    }

}
