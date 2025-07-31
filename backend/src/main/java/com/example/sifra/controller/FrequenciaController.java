package com.example.sifra.controller;

import java.util.Comparator;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

import com.example.sifra.dto.*;
import com.example.sifra.model.*;
import com.example.sifra.repository.*;

@RestController
@RequestMapping("/frequencia")
public class FrequenciaController {

    @Autowired
    DocenteRepository repository;
    @Autowired
    TurmaRepository turmaRep;
    @Autowired
    AulaRepository aulaRep;
    @Autowired
    DiscenteRepository discenteRep;
    @Autowired
    FrequenciaRepository frequenciaRep;

    @GetMapping("/turmas")
    public List<TurmaResponseDTO> getTurmasAtivas(@RequestParam Long docenteId) {

        Optional<Docente> optionalDocente = repository.findById(docenteId);
        if (optionalDocente.isPresent()) {
            Docente docente = optionalDocente.get();
            List<TurmaResponseDTO> turmas = docente.getTurmasAtivas().stream().map(TurmaResponseDTO::new)
                    .collect(Collectors.toList());
            return turmas;
        } else {
            // Return an empty list or handle the case where the docente is not found
            return List.of();
        }
    }

    // @GetMapping("/discentes")
    // public List<DiscenteDTO> getDiscentesTurma(@RequestParam Long turmaId) {
    //     List<Discente> discentes = turmaRep.findDiscentesByTurmaIdOrdered(turmaId);
    //     return discentes.stream()
    //             .map(DiscenteDTO::new)
    //             .collect(Collectors.toList());
    // }

    @GetMapping("/discentes")
    public List<DiscenteDTO> getDiscentesComFaltas(@RequestParam Long turmaId) {
        Optional<Turma> optionalTurma = turmaRep.findById(turmaId);
        if (optionalTurma.isEmpty())
            return List.of();

        Turma turma = optionalTurma.get();

        return turma.getDiscentes()
                .stream()
                .map(d -> {
                    int faltas = frequenciaRep.countByDiscenteIdAndPresenteFalse(d.getId());
                    return new DiscenteDTO(d, faltas);
                })
                .sorted(Comparator.comparing(DiscenteDTO::nome)) // ordena alfabeticamente
                .collect(Collectors.toList());
    }

    @PostMapping("/lancar")
    public List<Frequencia> lancarFrequencia(@RequestBody FrequenciaRequestDTO dto) {

        Turma turma = turmaRep.findById(dto.turmaId())
                .orElseThrow(() -> new RuntimeException("Turma não encontrada"));

        // Criar a aula no banco
        Aula aula = new Aula();
        aula.setTurma(turma);
        aula.setData(dto.data());
        final Aula savedAula = aulaRep.save(aula); // Persiste a aula

        // Criar as frequências
        List<Frequencia> frequencias = dto.discentes().stream().map(disc -> {
            Discente discente = discenteRep.findById(disc.discenteId())
                    .orElseThrow(() -> new RuntimeException("Discente não encontrado"));
            Frequencia f = new Frequencia();
            f.setAula(savedAula);
            f.setDiscente(discente);
            f.setPresente(disc.presente());
            return f;
        }).toList();

        return frequenciaRep.saveAll(frequencias);
    }

}
