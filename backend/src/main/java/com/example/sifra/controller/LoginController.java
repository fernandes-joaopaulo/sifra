package com.example.sifra.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.server.ResponseStatusException;

import com.example.sifra.dto.*;
//import com.example.sifra.model.*;
import com.example.sifra.repository.AdminRepository;
import com.example.sifra.repository.CoordenadorRepository;
import com.example.sifra.repository.DiscenteRepository;
import com.example.sifra.repository.DocenteRepository;
import com.example.sifra.repository.UsuarioRepository;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/auth")
public class LoginController {

    @Autowired
    private UsuarioRepository usuarioRepository;
    @Autowired
    private AdminRepository adminRepository;
    @Autowired
    private CoordenadorRepository coordenadorRepository;
    @Autowired
    private DocenteRepository docenteRepository;
    @Autowired
    private DiscenteRepository discenteRepository;

    @PostMapping("/login")
    public Object login(@RequestBody LoginDTO data) {

        // Busca o usuário genérico
        UsuarioResponseDTO usuario = usuarioRepository.findByEmailAndSenha(data.email(), data.senha());
        if (usuario == null) {
            throw new ResponseStatusException(HttpStatus.UNAUTHORIZED, "Email ou senha inválidos");
        }

        // Converte para o DTO específico conforme o perfil
        if (usuario.getPerfil().toLowerCase().equals("admin")) {
            return adminRepository.findById(usuario.getId()).map(AdminDTO::new);
        } 
        else if (usuario.getPerfil().toLowerCase().equals("coordenador")) {
            return coordenadorRepository.findById(usuario.getId()).map(CoordenadorDTO::new);
        } 
        else if (usuario.getPerfil().toLowerCase().equals("docente")) {
            return docenteRepository.findById(usuario.getId()).map(DocenteDTO::new);
        } 
        else if (usuario.getPerfil().toLowerCase().equals("discente")) {
            return discenteRepository.findById(usuario.getId()).map(DiscenteDTO::new);
        } 
        else {
            throw new ResponseStatusException(HttpStatus.UNAUTHORIZED, "Perfil de usuário inválido");
        }
    }
}
