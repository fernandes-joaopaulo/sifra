package com.example.sifra.model;

import java.util.List;

import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.Entity;
import jakarta.persistence.ManyToMany;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name = "discentes")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class Discente extends Usuario {

    private String matricula;
    private String curso;
    private String semestreIngresso;

    @JsonIgnore
    @ManyToMany(mappedBy = "discentes")
    private List<Turma> turmasAtivas;
}
