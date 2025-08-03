package com.example.sifra.model;

import java.util.List;

import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
@Entity
@Table(name = "docentes")
@Getter
@AllArgsConstructor
@NoArgsConstructor
public class Docente extends Usuario {

    private String departamento;
    
    @JsonIgnore
    @OneToMany(mappedBy = "docente", cascade = CascadeType.ALL)
    private List<Turma> turmasAtivas;
}
