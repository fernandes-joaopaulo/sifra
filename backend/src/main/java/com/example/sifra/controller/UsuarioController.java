package com.example.sifra.controller;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.sifra.dto.UsuarioRequestDTO;
import com.example.sifra.dto.UsuarioResponseDTO;
import com.example.sifra.model.Usuario;
import com.example.sifra.repository.UsuarioRepository;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

@RestController
@RequestMapping("/usuarios")
public class UsuarioController {
            
    @Autowired
    private UsuarioRepository repository;

    @PostMapping
    public void saveUsuario(@RequestBody UsuarioRequestDTO data) {
        Usuario userData = new Usuario(data);
        repository.save(userData);
        return;
    }
    
    @GetMapping
    public List<UsuarioResponseDTO> getAll() {
        return repository.findAll().stream()
                .map(UsuarioResponseDTO::new)
                .collect(Collectors.toList());
    }
}
