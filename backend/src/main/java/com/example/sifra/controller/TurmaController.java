package com.example.sifra.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.sifra.repository.TurmaRepository;
import com.example.sifra.dto.TurmaResponseDTO;
import org.springframework.web.bind.annotation.GetMapping;

@RestController
@RequestMapping("/turmas")
public class TurmaController {
    
    @Autowired
    TurmaRepository repository;

    @GetMapping
    public List<TurmaResponseDTO> getAll() {
        List<TurmaResponseDTO> turmas = repository.findAll()
            .stream()
            .map(TurmaResponseDTO::new)
            .toList();
        return turmas;
    }
    
}
