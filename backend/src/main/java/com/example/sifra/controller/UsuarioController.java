package com.example.sifra.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.sifra.model.*;
import com.example.sifra.repository.*;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;

@RestController
@RequestMapping("/usuario")
public class UsuarioController {

    @Autowired
    private UsuarioRepository repository;
    @Autowired
    private DocenteRepository docenteRepository;
    @Autowired
    private DiscenteRepository discenteRepository;
    @Autowired
    private CoordenadorRepository coordenadorRepository;

    @PostMapping("/save/docente")
    public void saveDocente(@RequestBody Docente data) {
        docenteRepository.save(data);
    }

    @PostMapping("/save/discente")
    public void saveDiscente(@RequestBody Discente data) {
        discenteRepository.save(data);
    }

    @PostMapping("/save/coordenador")
    public void saveCoordenador(@RequestBody Coordenador data) {
        coordenadorRepository.save(data);
    }

    @GetMapping
    public Usuario getUsuario(@RequestParam Long id) {
        return repository.findById(id).orElse(null);
    }

    @GetMapping("/gerenciar")
    public List<Usuario> getUsuarios() {
        return repository.findAll();
    }

    @PostMapping("/delete")
    public void deletarUsuario(@RequestBody Long id) {
        repository.deleteById(id);
    }

}
